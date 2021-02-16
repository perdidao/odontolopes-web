<template>
  <nav class="navigation">
    <router-link
      v-for="link in links"
      :key="link.title"
      class="navigation-link"
      :to="link.target"
    >
      <span class="navigation-link__icon"></span>
      {{ link.title }}
    </router-link>
  </nav>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        title: "Painel",
        target: "/dashboard",
      },
      {
        title: "Consultas",
        target: "/consultas",
      },
      {
        title: "Pacientes",
        target: "/pacientes",
      },
      {
        title: "Procedimentos",
        target: "/procedimentos",
      },
      {
        title: "Clínicas",
        target: "/clinicas",
      },
    ],
  }),
};
</script>
