import { defineConfig } from "astro/config";
import react from "@astrojs/react";
// import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import typescript from "@astrojs/ts-plugin";
import ckeditor5 from "@ckeditor/ckeditor5-build-classic";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), partytown(), typescript(), ckeditor5()],
});
