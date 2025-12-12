import { NextResponse } from 'next/server';
import { getAllPostSlugs, getSortedPostsData } from '@/lib/blog';

export async function GET() {
  try {
    const slugs = getAllPostSlugs();
    const posts = getSortedPostsData();
    return NextResponse.json({ slugs, posts });
  } catch (error: any) {
    return NextResponse.json(
      { error: 'Failed to fetch posts', details: error.message },
      { status: 500 }
    );
  }
}
