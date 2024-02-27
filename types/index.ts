import { SVGProps } from 'react';

export type IconSvgProps = SVGProps<SVGSVGElement> & {
	size?: number;
};

export interface PostInterface {
	content: string;
	length: number;
	blog_id: string;
	index: number;
	title: string;
	image_url: string;
	created_at: string;
	view_count: number;
}
