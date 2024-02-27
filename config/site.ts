export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: 'Posts blogs',
	description: 'The blogs post simple and very easy to use.',
	navItems: [
		{
			label: 'Home',
			href: '/',
		},

		{
			label: 'Post',
			href: '/posts',
		},
	],
	navMenuItems: [
		{
			label: 'Home',
			href: '/',
		},

		{
			label: 'Post',
			href: '/posts',
		},
	],
	links: {
		github: 'https://github.com/duongnguyen321',
		facebook: 'https://fb.com/duongnguyen321',
		site: 'https://ndng.net',
	},
};
