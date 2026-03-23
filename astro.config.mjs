// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const isProd = process.env.NODE_ENV === 'production';

// https://astro.build/config
export default defineConfig({
	site: 'https://180-studios.github.io',
	base: isProd ? '/ShaleDocs' : '/',
	integrations: [
		starlight({
			title: 'Shale Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/180-studios/ShaleDocs' }],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction', slug: 'guides/introduction' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
