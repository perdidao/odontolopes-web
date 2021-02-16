export default {
  ssr: false,
  target: "static",
  head: {
    titleTemplate: "Odontolopes — %s",
    title: "Início",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
  },
  env: {
    api: "http://localhost:1337",
    auth: "http://localhost:1337/auth/local",
  },
  css: ["@/assets/styles/main.scss"],
  plugins: [],
  components: true,
  buildModules: ["@nuxtjs/eslint-module", "@nuxtjs/vuetify"],
  modules: ["@nuxtjs/axios", "@nuxtjs/pwa"],
  axios: {},
  build: {},
};
