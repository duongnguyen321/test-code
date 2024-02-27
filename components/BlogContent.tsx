import mdToHtml from '@/helpers/mdToHTML';

export default function BlogContent({ content }: { content: string }) {
	let computedContent = content;
	let contentParts = computedContent.split(
		/(<code-snippet>[\s\S]*?<\/code-snippet>)/gm
	);

	for (let i = 0; i < contentParts.length; i++) {
		if (
			contentParts[i].startsWith('<code-snippet>') &&
			contentParts[i].endsWith('</code-snippet>')
		) {
			contentParts[i] = mdToHtml(contentParts[i], true);
		} else {
			contentParts[i] = mdToHtml(contentParts[i]);
		}
	}

	computedContent = contentParts.join('');

	return (
		<div
			className='p-2 -translate-y-[20px] w-full content-blogs'
			id='content-blogs'
			dangerouslySetInnerHTML={{
				__html: computedContent,
			}}
		/>
	);
}
