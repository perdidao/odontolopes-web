<template>
  <section class="auth">
    <v-progress-circular indeterminate="true" size="100" color="white"
      ><img src="@/assets/images/symbol.png" width="70" alt=""
    /></v-progress-circular>
  </section>
</template>

<script>
import Cookie from "js-cookie";

export default {
  layout: "clean",
  mounted() {
    const self = this;
    Cookie.remove("token");
    setTimeout(() => {
      self.$router.push("/");
    }, 200);
  },
};
</script>
