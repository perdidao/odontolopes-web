<template>
  <section class="patients">
    <div class="d-flex align-center justify-space-between">
      <h1 class="display-1">Procedimentos</h1>
      <v-btn router fab elevation="0" color="primary" to="/procedimentos/novo"
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
    endpoint: "procedures",
    messages: {
      error: "Erro ao carregar os procedimentos",
    },
    message: {
      show: false,
      type: "",
      text: "",
    },
    headers: [
      { text: "Título", value: "title" },
      { text: "Descrição", value: "description" },
      { text: "Valor", value: "value" },
    ],
    items: [],
  }),
  head: {
    title: "Procedimentos",
  },
  mounted() {
    list(this);
  },
};
</script>
