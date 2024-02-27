export default async function fetcher(url: string, options?: {}) {
	if (!url.startsWith('http')) {
		url = `http://localhost:3000${url}`;
	}
	const data = await fetch(url, options).then((res) => res.json());
	return data;
}
