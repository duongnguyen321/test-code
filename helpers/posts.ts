import { PostInterface } from '@/types';
import fetcher from './fetcher';

export async function getPosts() {
	const posts: { posts: PostInterface[] } = await fetcher('/api/posts');
	return posts.posts;
}
