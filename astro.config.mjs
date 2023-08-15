import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import vue from '@astrojs/vue'
import partytown from '@astrojs/partytown'
import image from '@astrojs/image'
import svelte from '@astrojs/svelte'
import mdx from '@astrojs/mdx'
import starlight from '@astrojs/starlight'
import robotsTxt from 'astro-robots-txt'
import solidJs from '@astrojs/solid-js'
import preact from '@astrojs/preact'

// import node from '@astrojs/node'
// import vercel from '@astrojs/vercel/serverless'
// import from MRT "@astrojs/MRT"
// import cloudflare from "@astrojs/cloudflare"
// import node from "@astrojs/node";
// import tailwind from "@astrojs/tailwind";
// import typescript from "@astrojs/ts-plugin";
// import ckeditor5 from "@ckeditor/ckeditor5-build-classic";
// import bootstrap from "bootstrap";
// import { ts, typescript } from "@astrojs/ts-plugin";

// Helped By Rangana! :D rangana is his github username!

// https://astro.build/config
export default defineConfig({
	integrations: [
		react(),
		partytown(),
		vue(),
		image(),
		svelte(),
		starlight(),
		mdx({
			syntaxHighlight: 'shiki',
			shikiConfig: {
				theme: 'dracula'
			},
			remarkPlugins: [remarkToc],
			rehypePlugins: [rehypeMinifyHtml],
			remarkRehype: {
				footnoteLabel: 'Footnotes'
			},
			gfm: false,
			extendMarkdownConfig: false,
			optimize: true
		}),
		solidJs(),
		robotsTxt({}),
		preact()
	]
})
