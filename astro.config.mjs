import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import partytown from "@astrojs/partytown";
import image from "@astrojs/image";
import node from "@astrojs/node";
// import cloudflare from "@astrojs/cloudflare"
// import node from "@astrojs/node";
// import tailwind from "@astrojs/tailwind";
// import typescript from "@astrojs/ts-plugin";
// import ckeditor5 from "@ckeditor/ckeditor5-build-classic";
// import bootstrap from "bootstrap";
// import { ts, typescript } from "@astrojs/ts-plugin";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), partytown(), vue(), image()],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
