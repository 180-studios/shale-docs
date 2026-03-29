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
				light: './public/images/shaleprimarylogo-color.png',
				dark: './public/images/ShalePrimaryLogo-Color-DarkMode.png',
				replacesTitle: true,
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/180-studios/Shale-Docs' }],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction', slug: 'getting-started/introduction' },
						{ label: 'Quick Start', slug: 'getting-started/quick-start' },
					],
				},
				{
					label: 'Annotation',
					items: [
						{ label: 'Brush Engine', slug: 'annotation/brush-engine' },
						{ label: 'Comments & Notes', slug: 'annotation/comments' },
					],
				},
				{
					label: 'Integrations',
					items: [
						{ label: 'Overview', slug: 'integrations/overview' },
						{ label: 'Unreal Engine', slug: 'integrations/unreal-engine' },
						{ label: 'Blender', slug: 'integrations/blender' },
						{ label: 'SketchUp', slug: 'integrations/sketchup' },
						{ label: 'Maya', slug: 'integrations/maya' },
					],
				},
				{
					label: 'Access & Permissions',
					items: [
						{ label: 'Managing Users', slug: 'access/managing-users' },
					],
				},
				{
					label: 'Artist Workflow',
					items: [
						{ label: 'Capturing Environment', slug: 'artist/capturing' },
					],
				},
			],
		}),
	],
});
