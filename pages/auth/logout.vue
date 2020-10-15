<template>
  <section class="auth">
    <h1 class="auth-title">Você será desconectado</h1>
  </section>
</template>

<script>
import Cookie from "js-cookie";

export default {
  mounted() {
    const self = this;
    Cookie.remove("token");
    setTimeout(() => {
      self.$router.push("/");
    }, 200);
  },
};
</script>
