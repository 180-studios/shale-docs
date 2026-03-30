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
						{ label: 'Installing Plugin', slug: 'creator/installing-plugin' },
						{ label: 'Logging In', slug: 'creator/logging-in' },
						{ label: 'Linking A Project', slug: 'creator/linking-a-project' },
						{ label: 'Rendering a Review Region', autogenerate: { directory: 'Creator/Rendering a Review Region' } },
					],
				},
				{ label: 'Reviewer', autogenerate: { directory: 'Reviewer' } },
				{ label: 'Annotation', autogenerate: { directory: 'annotation' } },
				{ label: 'Integrations', autogenerate: { directory: 'integrations' } },
				{ label: 'Artist Workflow', autogenerate: { directory: 'artist' } },
				{ label: 'Access & Permissions', autogenerate: { directory: 'access' } },
			],
		}),
	],
});
