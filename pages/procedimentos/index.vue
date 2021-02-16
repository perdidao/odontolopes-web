<template>
  <section class="patients">
    <div class="page-header">
      <h1 class="page-header__title">Procedimentos</h1>
      <a href="/procedimentos/novo" class="page-header__button">
        novo procedimento
      </a>
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
