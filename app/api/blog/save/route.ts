import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'content', 'blog');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { slug, title, date, excerpt, content } = body;

    if (!slug || !title || !content) {
      return NextResponse.json(
        { error: 'Missing required fields: slug, title, and content are required' },
        { status: 400 }
      );
    }

    // Ensure posts directory exists
    if (!fs.existsSync(postsDirectory)) {
      fs.mkdirSync(postsDirectory, { recursive: true });
    }

    // Create frontmatter
    const frontmatter = `---
title: "${title.replace(/"/g, '\\"')}"
date: "${date || new Date().toISOString().split('T')[0]}"
excerpt: "${(excerpt || '').replace(/"/g, '\\"')}"
---

`;

    // Combine frontmatter with content
    const fileContent = frontmatter + content;

    // Write to file
    const filePath = path.join(postsDirectory, `${slug}.md`);
    fs.writeFileSync(filePath, fileContent, 'utf8');

    return NextResponse.json({ 
      success: true, 
      message: 'Blog post saved successfully',
      slug 
    });
  } catch (error: any) {
    console.error('Error saving blog post:', error);
    return NextResponse.json(
      { error: 'Failed to save blog post', details: error.message },
      { status: 500 }
    );
  }
}
