<template>
  <section class="patients">
    <h1>Clínicas</h1>
    <nuxt-link to="/clinicas/nova">Nova clínica</nuxt-link>
    <nuxt-link to="/dashboard">Dashboard</nuxt-link>

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
    title: "Odontolopes — Clínicas",
  },
  mounted() {
    list(this);
  },
};
</script>
