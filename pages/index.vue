<template>
  <section>
    <h1>Início</h1>
  </section>
</template>

<script>
export default {
  mounted() {
    this.$router.push("auth/login");
  },
};
</script>
