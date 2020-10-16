<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="clipped"
      fixed
      app
      class="menu"
    >
      <v-list>
        <v-list-item v-for="(link, l) in links" :key="l" :to="link.target">
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            {{ link.title }}
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <div
        class="d-flex align-center justify-space-between"
        style="width: 100%"
      >
        <div class="d-flex align-center justify-space-between">
          <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
          <img src="@/assets/images/symbol.png" alt="Odontopro" height="30" />
          <v-toolbar-title
            class="primary--text font-weight-black"
            v-text="title"
          />
        </div>
        <div class="d-flex align-center justify-space-between">
          <v-avatar width="40" color="primary" class="mr-2"></v-avatar>
          <p class="ma-0">
            {{ user.username }}<br />
            <router-link to="/auth/logout">Sair</router-link>
          </p>
        </div>
      </div>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    title: "Odontopro",
    drawer: true,
    clipped: true,
    user: {},
    links: [
      {
        icon: "mdi-view-dashboard",
        title: "Painel",
        target: "/dashboard",
      },
      {
        icon: "mdi-file-document-edit",
        title: "Consultas",
        target: "/consultas",
      },
      {
        icon: "mdi-account-group",
        title: "Pacientes",
        target: "/pacientes",
      },
      {
        icon: "mdi-tooth",
        title: "Procedimentos",
        target: "/procedimentos",
      },
      {
        icon: "mdi-hospital-building",
        title: "Clínicas",
        target: "/clinicas",
      },
    ],
  }),
  beforeMount() {
    this.user = this.$store.getters["getUser"];
  },
};
</script>
