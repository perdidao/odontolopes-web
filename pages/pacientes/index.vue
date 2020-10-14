<template>
  <section class="patients">
    <h1>Pacientes</h1>
    <nuxt-link to="/pacientes/novo">Novo paciente</nuxt-link>

    <v-alert v-if="message.show" :type="message.type">
      {{ message.text }}
    </v-alert>
    <v-data-table :items="items" :headers="headers"></v-data-table>
  </section>
</template>

<script>
import { list } from "@/functions/cruds";

export default {
  middleware: "private",
  data: () => ({
    loading: false,
    endpoint: "patients",
    messages: {
      success: "Paciente cadastrado com sucesso",
      error: "Erro ao cadastrar o paciente",
    },
    message: {
      show: false,
      type: "",
      text: "",
    },
    headers: [
      { text: "Nome", value: "name" },
      { text: "E-mail", value: "email" },
      { text: "Telefone", value: "phone" },
      { text: "Informações adicionais", value: "additional" },
    ],
    items: [],
  }),
  head: {
    title: "Odontolopes — Pacientes",
  },
  mounted() {
    list(this);
  },
};
</script>
