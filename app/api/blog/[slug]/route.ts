import { NextRequest, NextResponse } from 'next/server';
import { getPostData } from '@/lib/blog';

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
