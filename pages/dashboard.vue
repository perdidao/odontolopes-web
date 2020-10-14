<template>
  <section>
    <h1>Dashboard</h1>
    <nuxt-link to="/pacientes">Pacientes</nuxt-link>
    <nuxt-link to="/clinicas">Clínicas</nuxt-link>
    <nuxt-link to="/procedimentos">Procedimentos</nuxt-link>
    <nuxt-link to="/consultas">Consultas</nuxt-link>
  </section>
</template>

<script>
export default {
  middleware: "private",
};
</script>
