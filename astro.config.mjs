import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://noswaldev.github.io/Wiggler_pet/', //temporarily remove /wigg for hosting
	// site: 'https://wiggler.pet', //site to pair with CNAME
	// base: '/Wiggler_pet', //temporarily comment out to run on dev server
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
			customCss: [
				'/src/styles/global.css',
				'/src/styles/global_small.css',
			],
		}),
	],
});
