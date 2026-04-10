// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.shalereview.com',
	integrations: [
		mermaid(),
		starlight({
			tableOfContents: false,
			head: [
				{ tag: 'script', attrs: { src: '/sidebar-toggle.js', defer: true } },
				{ tag: 'script', attrs: { src: '/lightbox.js', defer: true } },
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
				{ label: 'Getting Started', autogenerate: { directory: '01_Getting_Started' } },
				{ label: 'Web Portal', autogenerate: { directory: 'web-portal' } },
				{
					label: 'Creator',
					collapsed: true,
					items: [
						{ label: 'Creator Quick Start', link: '02_creator/creator-quick-start' },
						{ label: 'Browser Upload', autogenerate: { directory: '02_Creator/01_Browser_Upload' } },
						{ label: 'Plugin Upload', autogenerate: { directory: '02_Creator/02_Plugin_Upload' } },
						{ label: 'Reviewing Feedback', autogenerate: { directory: '02_Creator/03_Reviewing_Feedback' } },
					],
				},
				{
					label: 'Reviewer',
					collapsed: true,
					items: [
						{ label: 'Reviewer Quick Start', link: '03_reviewer/reviewer-quick-start' },
						{
							label: 'Reviewing',
							collapsed: true,
							items: [
								{ label: 'Highlighting', link: '03_reviewer/02_review/highlighting' },
								{ label: 'Brush Engine', link: '03_reviewer/02_review/brush-engine' },
								{ label: 'Comments', link: '03_reviewer/02_review/comments' },
								{ label: 'Replying', link: '03_reviewer/02_review/replying' },
								{ label: 'Camera Controls', link: '03_reviewer/02_review/camera-controls' },
								{ label: 'Color', link: '03_reviewer/02_review/color' },
								{ label: 'Versions', link: '03_reviewer/02_review/versions' },
								{ label: '3D Assets', autogenerate: { directory: '03_Reviewer/02_Review/3D_assets' } },
							],
						},
					],
				},
				{ label: 'Administration', autogenerate: { directory: 'administration' } },
				{ label: 'Tips and Tricks', autogenerate: { directory: '04_tips-and-tricks' } },
				{ label: 'Integrations', autogenerate: { directory: '05_integrations' } },
			],
		}),
	],
});
