import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	// site: 'https://wiggler.pet', //site to pair with CNAME
	site: 'https://noswaldev.github.io', //temporarily remove /wigg for hosting
	base: 'Wiggler_pet', //temporarily comment out to run on dev server
	integrations: [
		starlight({
			title: 'MH Wigglis',
			social: {
			},
			sidebar: [
				// {
				// 	label: 'Guides',
				// 	items: [
				// 		// Each item here is one entry in the navigation menu.
				// 		{ label: 'Example Guide', link: '/guides/example/' },
				// 	],
				// },
				// {
				// 	label: 'Reference',
				// 	autogenerate: { directory: 'reference' },
				// },
			],
			disable404Route: true, //override default starlight 404
			// customCss: [
			// 	'./src/styles/global.css',
			// 	'./src/styles/global_small.css',
			// ],
		}),
	],
});
