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
				{ label: 'Upload via Browser', autogenerate: { directory: '02_Browser_Upload' } },
				{ label: 'Upload via Plugin', collapsed: true, autogenerate: { directory: '03_Plugin_Upload' } },
				{
					label: 'Reviewing',
					collapsed: true,
					items: [
						{ label: 'Overview', link: '04_review/overview' },
						{ label: 'Commenting', link: '04_review/replying' },
						{ label: 'Versions', link: '04_review/versions' },
					],
				},
				{ label: '3D Assets', autogenerate: { directory: '04_Review/3D_assets' } },
				{ label: 'Web Portal', autogenerate: { directory: 'web-portal' } },
				{ label: 'Administration', autogenerate: { directory: 'administration' } },
				{ label: 'Tips and Tricks', autogenerate: { directory: '04_tips-and-tricks' } },
				{ label: 'Integrations', autogenerate: { directory: '05_integrations' } },
			],
		}),
	],
});
