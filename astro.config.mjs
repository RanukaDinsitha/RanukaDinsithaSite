import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import partytown from "@astrojs/partytown";
import image from "@astrojs/image";
import node from "@astrojs/node";
import vercel from "@astrojs/vercel/serverless";
import svelte from "@astrojs/svelte";
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
  integrations: [react(), partytown(), vue(), image(), svelte()],
  output: "server",
  adapter: vercel()
});

