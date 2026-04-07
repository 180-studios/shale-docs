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
				{ label: 'Getting Started', autogenerate: { directory: '01_Getting_Started' } },
				{
					label: 'Creator',
					collapsed: true,
					items: [
						{ label: 'Creator Quick Start Guide', link: '02_creator/creator-quick-start' },
						{ label: 'Creating', autogenerate: { directory: '02_Creator/01_Creating' } },
						{ label: 'Review', autogenerate: { directory: '02_Creator/02_Review' } },
						{ label: 'Action', autogenerate: { directory: '02_Creator/03_Action' } },
					],
				},
				{
					label: 'Reviewer',
					collapsed: true,
					items: [
						{ label: 'Creating', autogenerate: { directory: '03_Reviewer/01_Creating' } },
						{
							label: 'Reviewing',
							collapsed: true,
							items: [
								{ label: 'Navigation', link: '03_reviewer/02_review/navigation' },
								{ label: 'Highlighting', link: '03_reviewer/02_review/highlighting' },
								{ label: 'Brush Engine', link: '03_reviewer/02_review/brush-engine' },
								{ label: 'Notes/Commenting', link: '03_reviewer/02_review/notes-commenting' },
								{ label: 'Replying', link: '03_reviewer/02_review/replying' },
								{ label: 'Camera Controls', link: '03_reviewer/02_review/camera-controls' },
								{ label: 'Color', link: '03_reviewer/02_review/color' },
								{ label: 'Versions', link: '03_reviewer/02_review/versions' },
								{ label: '3D Assets', autogenerate: { directory: '03_Reviewer/02_Review/3D_assets' } },
							],
						},
						{ label: 'Action', autogenerate: { directory: '03_Reviewer/03_Action' } },
					],
				},
				{ label: 'Tips and Tricks', autogenerate: { directory: '04_tips-and-tricks' } },
				{ label: 'Integrations', autogenerate: { directory: '05_integrations' } },
			],
		}),
	],
});
