<template>
  <section class="patients">
    <h1>Novo procedimento</h1>

    <v-text-field
      v-model="data.title"
      label="Título"
      outlined
      hide-details
      type="text"
    />
    <v-textarea v-model="data.description" label="Descrição" outlined />
    <v-text-field
      v-model="data.value"
      label="Título"
      outlined
      hide-details
      type="number"
    />
    <v-btn :disabled="loading" :loading="loading" @click="registerProcedure"
      >Cadastrar</v-btn
    >
    <nuxt-link to="/procedimentos">Voltar para Procedimentos</nuxt-link>
    <v-alert v-if="message.show" :type="message.type">
      {{ message.text }}
    </v-alert>
  </section>
</template>

<script>
import { register } from "@/functions/cruds";

export default {
  middleware: "private",
  data: () => ({
    loading: false,
    endpoint: "procedures",
    data: {
      title: "",
      description: "",
      value: 0,
    },
    messages: {
      success: "Procedimento cadastrado com sucesso",
      error: "Erro ao cadastrar o procedimento",
    },
    message: {
      show: false,
      type: "",
      text: "",
    },
  }),
  head: {
    title: "Odontolopes — Novo procedimento",
  },
  methods: {
    registerProcedure() {
      register(this);
    },
  },
};
</script>
