<template>
  <v-app>
    <Header />
    <Navigation />
    <main class="main">
      <nuxt />
    </main>
  </v-app>
</template>

<script>
import Header from "@/components/global/Header";
import Navigation from "@/components/global/Navigation";

export default {
  components: {
    Header,
    Navigation,
  },
  data: () => ({
    title: "Odontopro",
  }),
};
</script>
