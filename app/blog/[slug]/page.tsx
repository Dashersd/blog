import type { Metadata } from 'next';
import { getAllPostSlugs, getPostData } from '@/lib/blog';
import Image from 'next/image';
import PostCarousel from '@/components/PostCarousel';
import { notFound } from 'next/navigation';

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  try {
    const postData = await getPostData(params.slug);
    return {
      title: `${postData.title} - Helman Dacuma Blog`,
      description: postData.excerpt || postData.content.substring(0, 160),
    };
  } catch {
    return {
      title: 'Post Not Found',
    };
  }
}

export default async function BlogPost({ params }: BlogPostProps) {
  let postData;
  try {
    postData = await getPostData(params.slug);
  } catch {
    notFound();
  }

  return (
    <div className="bg-white">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {postData.title}
          </h1>
          {postData.date && (
            <time className="text-gray-500 text-lg">
              {new Date(postData.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          )}
        </header>

        {/* Media */}
        {postData.images && postData.images.length > 1 ? (
          <div className="mb-12">
            <PostCarousel images={postData.images} />
          </div>
        ) : postData.images && postData.images.length === 1 ? (
          <div className="relative mb-12 h-[320px] md:h-[420px] overflow-hidden rounded-2xl shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)]">
            <Image
              src={postData.images[0].src}
              alt={postData.images[0].alt || postData.images[0].caption || postData.title}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
              priority
            />
            {(postData.images[0].caption || postData.images[0].alt) && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white text-sm px-4 py-2">
                {postData.images[0].caption || postData.images[0].alt}
              </div>
            )}
          </div>
        ) : null}

        {/* Content */}
        <div
          className="prose prose-lg max-w-none prose-img:rounded-lg prose-img:shadow-md prose-img:my-8"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }}
        />
      </article>
    </div>
  );
}

