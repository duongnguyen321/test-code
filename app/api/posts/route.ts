import { NextRequest, NextResponse } from 'next/server';
import posts from '../../../data/posts.json';
import { PostInterface } from '@/types';
import { v4 as uuid } from 'uuid';
import path from 'path';
import fsPromises from 'fs/promises';
export function GET() {
	const postList: PostInterface[] = posts.posts;
	const postSorted: PostInterface[] = postList.sort(
		(a, b) => a.index - b.index
	);
	return NextResponse.json(postSorted);
}

export async function POST(req: NextRequest) {
	const body = await req.json();
	if (!body || !body.title || !body.content || !body.image_url) {
		return NextResponse.json({
			status: 400,
			error: 'Bad Request',
		});
	}
	const pathData = path.join(process.cwd(), 'data', 'posts.json');
	const postList: PostInterface[] = posts.posts;
	const postSorted: PostInterface[] = postList.sort(
		(a, b) => a.index - b.index
	);
	const newPost: PostInterface = {
		content: body.content,
		length: (body.content + body.title).length,
		blog_id: uuid(),
		index: postSorted.length + 1,
		title: body.title,
		image_url: body.image_url,
		created_at: Date.now().toString(),
		view_count: 1,
	};
	postSorted.push(newPost);
	await fsPromises.writeFile(pathData, JSON.stringify(postSorted, null, 2));
	return NextResponse.json(newPost);
}
