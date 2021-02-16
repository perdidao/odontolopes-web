<template>
  <section class="clinics">
    <div class="d-flex align-center justify-space-between">
      <h1 class="main-title">Clínicas</h1>
      <v-btn router fab elevation="0" color="primary" to="/clinicas/nova">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
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
    endpoint: "clinics",
    messages: {
      error: "Erro ao carregar as clínicas",
    },
    message: {
      show: false,
      type: "",
      text: "",
    },
    headers: [
      { text: "Nome", value: "title" },
      { text: "Endereço", value: "address" },
    ],
    items: [],
  }),
  head: {
    title: "Clínicas",
  },
  mounted() {
    list(this);
  },
};
</script>
