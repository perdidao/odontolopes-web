<template>
  <section class="patients">
    <div class="d-flex align-center justify-space-between">
      <h1 class="display-1">Pacientes</h1>
      <v-btn router fab elevation="0" color="primary" to="/pacientes/novo"
        ><v-icon>mdi-plus</v-icon></v-btn
      >
    </div>
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
      error: "Erro ao carregar os pacientes",
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
    title: "Pacientes",
  },
  mounted() {
    list(this);
  },
};
</script>
