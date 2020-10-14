<template>
  <section>
    <h1>Dashboard</h1>
    <nuxt-link to="/pacientes">Pacientes</nuxt-link>
  </section>
</template>

<script>
export default {
  middleware: "private",
};
</script>
