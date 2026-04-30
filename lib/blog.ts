import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkImages from 'remark-images';

const postsDirectory = path.join(process.cwd(), 'content', 'blog');

export interface BlogImage {
  src: string;
  alt?: string;
  caption?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  dateEnd?: string;
  excerpt?: string;
  content: string;
  contentHtml?: string;
  images?: BlogImage[];
}


function normalizeImages(rawImages: unknown, fallbackContent: string): BlogImage[] {
  const normalized: BlogImage[] = [];

  if (Array.isArray(rawImages)) {
    rawImages.forEach((img) => {
      if (typeof img === 'string') {
        normalized.push({ src: img });
      } else if (img && typeof img === 'object' && 'src' in img) {
        const maybe = img as { src?: string; alt?: string; caption?: string };
        if (maybe.src) {
          normalized.push({ src: maybe.src, alt: maybe.alt, caption: maybe.caption });
        }
      }
    });
  }

  // If no explicit images, try extracting markdown image syntax ![alt](src)
  if (!normalized.length && fallbackContent) {
    const regex = /!\[(.*?)\]\((.*?)\)/g;
    let match;
    while ((match = regex.exec(fallbackContent)) !== null) {
      const alt = match[1] || undefined;
      const src = match[2] || '';
      if (src) {
        normalized.push({ src, alt });
      }
    }
  }

  return normalized;
}

function stripImagesFromHtml(contentHtml: string): string {
  // Remove image tags anywhere in the content to avoid duplicate rendering alongside the carousel
  const withoutImgParagraphs = contentHtml.replace(/<p>\s*<img[^>]*>\s*<\/p>/g, '');
  return withoutImgParagraphs.replace(/<img[^>]*>/g, '');
}

function getAllPostsData(): BlogPost[] {
  // Get file names under /content/blog
  const fileNames = fs.existsSync(postsDirectory)
    ? fs.readdirSync(postsDirectory)
    : [];
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      // Remove ".md" from file name to get slug
      const slug = fileName.replace(/\.md$/, '');

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the slug
      return {
        slug,
        title: matterResult.data.title || '',
        date: matterResult.data.date || '',
        dateEnd: matterResult.data.dateEnd || undefined,
        excerpt: matterResult.data.excerpt || '',
        content: matterResult.content,
        images: normalizeImages(matterResult.data.images, matterResult.content),
      };
    });
}

export function getSortedPostsData(): BlogPost[] {
  const allPostsData = getAllPostsData();

  // Sort posts by date (newest first) - default sorting
  return allPostsData.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    
    // Handle invalid dates by putting them at the end
    if (isNaN(dateA) && isNaN(dateB)) return 0;
    if (isNaN(dateA)) return 1;
    if (isNaN(dateB)) return -1;
    
    // Sort in descending order (newest first)
    return dateB - dateA;
  });
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''));
}

export async function getPostData(slug: string): Promise<BlogPost> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post with slug "${slug}" not found`);
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string with image support
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .use(remarkImages)
    .process(matterResult.content);
  const contentHtml = stripImagesFromHtml(processedContent.toString());

  // Combine the data with the slug and contentHtml
  return {
    slug,
    contentHtml,
    title: matterResult.data.title || '',
    date: matterResult.data.date || '',
    dateEnd: matterResult.data.dateEnd || undefined,
    excerpt: matterResult.data.excerpt || '',
    content: matterResult.content,
    images: normalizeImages(matterResult.data.images, matterResult.content),
  };
}

