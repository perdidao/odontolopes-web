<template>
  <section class="auth">
    <div class="auth__illustration"></div>
    <section class="auth__container">
      <div class="auth-form" @keydown.enter="submitLogin">
        <div class="auth-form__logo">
          <img src="@/assets/images/logo.png" alt="Odontolopes" />
        </div>
        <label class="auth-form__label">
          Login
          <input
            v-model="formData.identifier"
            type="text"
            class="auth-form__input"
            :readonly="loading"
          />
        </label>
        <label class="auth-form__label">
          Senha
          <input
            v-model="formData.password"
            type="password"
            class="auth-form__input"
            :readonly="loading"
          />
        </label>
        <v-alert v-if="message.show" :type="message.type">
          {{ message.content }}
        </v-alert>
        <button
          class="auth-form__button"
          :class="{ loading: loading }"
          :disabled="loading"
          @click="submitLogin"
        >
          Entrar
        </button>
      </div>
    </section>
  </section>
</template>

<script>
import { login } from "@/functions/auth";

export default {
  layout: "clean",
  data: () => ({
    loading: false,
    message: {
      show: false,
      type: "success",
      content: "Bem-vindo(a) à Odontolopes",
    },
    formData: {
      identifier: "",
      password: "",
    },
  }),
  head: {
    title: "Login",
  },
  methods: {
    login,
    submitLogin() {
      login(this);
    },
  },
};
</script>
