<template>
  <section class="patients">
    <h1>Pacientes</h1>
    <nuxt-link to="/pacientes/novo">Novo paciente</nuxt-link>
  </section>
</template>

<script>
export default {
  middleware: "private",
};
</script>
