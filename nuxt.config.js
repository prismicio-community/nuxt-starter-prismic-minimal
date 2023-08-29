import { repositoryName } from "./slicemachine.config.json";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Prismic + Nuxt Minimal Starter",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/prismic"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  build: {
    // See: https://github.com/nuxt/postcss8/issues/24
    loaders: {
      css: {
        modules: false,
      },
    },
    postcss: {
      postcssOptions: {
        plugins: {
          autoprefixer: {},
        },
      },
    }
  },

  publicRuntimeConfig: {
    development: process.env.NODE_ENV === "development",
  },

  prismic: {
    endpoint: `https://${repositoryName}.cdn.prismic.io/api/v2`,
    preview: "/api/preview",
    modern: true,
    apiOptions: {
      routes: [
        {
          type: "page",
          path: "/:uid",
        },
        {
          type: "page",
          uid: "home",
          path: "/",
        },
      ],
    },
  },
};
