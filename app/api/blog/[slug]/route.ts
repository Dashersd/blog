import { NextRequest, NextResponse } from 'next/server';
import { getPostData } from '@/lib/blog';
import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'content', 'blog');

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const postData = await getPostData(params.slug);
    return NextResponse.json(postData);
  } catch (error: any) {
    return NextResponse.json(
      { error: 'Post not found', details: error.message },
      { status: 404 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;

  // Basic slug validation to avoid path traversal
  if (!/^[a-zA-Z0-9-_]+$/.test(slug)) {
    return NextResponse.json({ error: 'Invalid slug' }, { status: 400 });
  }

  const filePath = path.join(postsDirectory, `${slug}.md`);

  try {
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    fs.unlinkSync(filePath);

    return NextResponse.json({ success: true, message: 'Post deleted' });
  } catch (error: any) {
    console.error('Error deleting post:', error);
    return NextResponse.json(
      { error: 'Failed to delete post', details: error.message },
      { status: 500 }
    );
  }
}
