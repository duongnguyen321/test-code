import './style.css';
import ContactUI from './components/PostUI';
export async function generateMetadata() {
	const data = {
		title: 'Post UI',
		description: 'Trang Post là nơi bạn có thể chia sẻ.',
	};
	return {
		title: {
			default: data.title,
		},
		description: data.description,
		openGraph: {
			title: data.title,
			description: data.description,
		},
		metadataBase: new URL(`${process.env.NEXT_PUBLIC_HOST}/contact`),
	};
}
export default async function Contact() {
	return <ContactUI />;
}
