<template>
  <header class="header">
    <router-link to="/dashboard" class="header__logo">
      <img src="~/assets/images/logo.png" alt="Odontolopes" />
    </router-link>
    <section class="header-user">
      <p class="header-user__name">{{ user.username }}</p>
      <router-link to="/auth/logout" class="header-user__logout">
        desconectar
      </router-link>
    </section>
  </header>
</template>

<script>
import { getUserData } from "@/functions/auth";

export default {
  data: () => ({
    user: {},
  }),
  beforeMount() {
    this.user = getUserData();
  },
};
</script>
