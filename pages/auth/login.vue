<template>
  <section class="login">
    <v-text-field
      v-model="formData.identifier"
      label="Usuário"
      outlined
      hide-details
    ></v-text-field>
    <v-text-field
      v-model="formData.password"
      label="Senha"
      outlined
      hide-details
      type="password"
    ></v-text-field>
    <v-btn primary :disabled="loading" @click="submitLogin">Entrar</v-btn>
    <v-alert v-if="message.show" :type="message.type">
      {{ message.text }}
    </v-alert>
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
};
</script>
