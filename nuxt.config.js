const bodyParser = require("body-parser");
const axios = require("axios");

module.exports = {
  // ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "WD Blog",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "My Cool Web Development Blog."
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~assets/styles/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~plugins/core-components.ts", "~plugins/date-filter.ts"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios"],

  axios: {
    baseURL:
      process.env.BASE_URL ||
      "https://nuxt-blog-e2622-default-rtdb.firebaseio.com"
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // progress-bar
  loading: {
    color: "#fa923f",
    height: "5px"
  },
  loadingIndicator: {
    name: "circle",
    color: "#fa923f"
  },

  // Environment Variables
  env: {
    baseUrl:
      process.env.BASE_URL ||
      "https://nuxt-blog-e2622-default-rtdb.firebaseio.com",
    fbAPIKey: "AIzaSyDtYFcMhfNhtjhsrfTTOa8cZD-q2i0Xp3M"
  },

  serverMiddleware: [bodyParser.json(), "~/api"],

  generate: {
    routes: function() {
      return axios
        .get("https://nuxt-blog-e2622-default-rtdb.firebaseio.com/posts.json")
        .then(res => {
          const routes = [];
          for (const key in res.data) {
            routes.push({
              route: "/posts/" + key,
              payload: { postData: res.data[key] }
            });
          }
          return routes;
        });
    }
  }
};
