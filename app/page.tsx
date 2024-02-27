import BlogContent from '@/components/BlogContent';
import { EyeFilledIcon } from '@/components/icons';
import { getPosts } from '@/helpers/posts';
import {
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Image,
	Spacer,
} from '@nextui-org/react';
import NextImage from 'next/image';
export default async function Home() {
	const posts = await getPosts();
	return (
		<>
			<h1>Welcome to posts blogs </h1>
			{posts?.map((post) => (
				<Card key={post.blog_id} className='my-4'>
					<CardHeader>
						<h2>{post.title}</h2>
					</CardHeader>
					<CardBody className='flex items-center'>
						<Image
							as={NextImage}
							src={post.image_url}
							width={400}
							height={300}
						/>
						<BlogContent content={post.content.slice(0, 250)} />
						<Spacer />
					</CardBody>
					<CardFooter>
						{post.view_count} <EyeFilledIcon />
					</CardFooter>
				</Card>
			))}
		</>
	);
}
