// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
	site: 'https://180-studios.github.io',
	base: '/shale-docs',
	integrations: [
		mermaid(),
		starlight({
			head: [
				{ tag: 'script', attrs: { src: '/shale-docs/sidebar-toggle.js', defer: true } },
			],
			title: 'Shale Docs',
			favicon: '/favicon.png',
			logo: {
				light: './src/assets/shaleprimarylogo-color.png',
				dark: './src/assets/ShalePrimaryLogo-Color-DarkMode.png',
				replacesTitle: true,
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/180-studios/Shale-Docs' }],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{ label: 'Getting Started', autogenerate: { directory: 'getting-started' } },
				{
					label: 'Creator',
					items: [
						{ label: 'Creator Quick Start Guide', link: 'creator/creator-quick-start' },
						{ label: 'Creating', autogenerate: { directory: 'Creator/01 Creating' } },
						{ label: 'Review', autogenerate: { directory: 'Creator/02 Review' } },
						{ label: 'Action', autogenerate: { directory: 'Creator/03 Action' } },
					],
				},
				{
					label: 'Reviewer',
					items: [
						{ label: 'Reviewing', autogenerate: { directory: 'Reviewer/01 Reviewing' } },
						{ label: 'Action', autogenerate: { directory: 'Reviewer/02 Review' } },
						{ label: 'Action', autogenerate: { directory: 'Reviewer/03 Action' } },
					],
				},
				{ label: 'Tips and Tricks', link: 'tips-and-tricks' },
			],
		}),
	],
});
