// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://shale-docs.netlify.app',
	integrations: [
		starlight({
			title: 'Shale Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/180-studios/Shale-Docs' }],
			customCss: ['./src/styles/custom.css'],
			head: [
				{
					tag: 'script',
					attrs: { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
				},
			],
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
