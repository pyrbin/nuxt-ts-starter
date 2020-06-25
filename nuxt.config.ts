import { Configuration } from "@nuxt/types";
import { name, description } from "./package.json";

const isDev: boolean = process.env.NODE_ENV !== "production";

export default {
  dev: isDev,
  head: {
    titleTemplate: "%s - ",
    title: name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  buildModules: ["@nuxt/typescript-build", "@nuxtjs/tailwindcss"],
  plugins: ["~/plugins/composition-api"]
} as Configuration;
