<template>
  <section class="auth">
    <div class="auth-container">
      <img
        src="@/assets/images/logo.png"
        alt="Odontolopes"
        class="auth__logo"
      />
      <v-text-field
        v-model="formData.identifier"
        label="Usuário"
        outlined
        hide-details
        class="auth__input"
      ></v-text-field>
      <v-text-field
        v-model="formData.password"
        label="Senha"
        outlined
        hide-details
        type="password"
        class="auth__input"
      ></v-text-field>
      <v-btn primary :disabled="loading" :loading="loading" @click="submitLogin"
        >Entrar</v-btn
      >
      <v-alert v-if="message.show" :type="message.type">
        {{ message.text }}
      </v-alert>
    </div>
  </section>
</template>

<script>
import { login } from "@/functions/auth";

export default {
  data: () => ({
    loading: false,
    message: {
      show: false,
      type: "success",
      text: "Bem-vindo(a) à Odontolopes",
    },
    formData: {
      identifier: "",
      password: "",
    },
  }),
  head: {
    title: "Odontolopes — Login",
  },
  methods: {
    login,
    submitLogin() {
      login(this);
    },
  },
  template: "clean",
};
</script>
