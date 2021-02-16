<template>
  <section class="clinics">
    <div class="page-header">
      <h1 class="page-header__title">Clínicas</h1>
      <a href="/clinicas/nova" class="page-header__button">nova clínica</a>
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
