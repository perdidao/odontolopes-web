<template>
  <section>
    <h1>Início</h1>
  </section>
</template>

<script>
export default {
  layout: "clean",
  mounted() {
    this.$router.push("auth/login");
  },
};
</script>
