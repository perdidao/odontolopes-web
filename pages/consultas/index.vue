<template>
  <section class="patients">
    <div class="page-header">
      <h1 class="page-header__title">Consultas</h1>
      <a href="/consultas/nova" class="page-header__button">nova consulta</a>
    </div>
    <v-alert v-if="message.show" :type="message.type">
      {{ message.text }}
    </v-alert>
    <v-data-table :items="items" :headers="headers">
      <template #[`item.date`]="{ item }">
        <span>{{ formatDate(item.date) }}</span>
        <strong>{{ formatTime(item.date) }}</strong>
      </template>
      <template #[`item.patient`]="{ item }">
        <span>{{ item.patient.name }}</span>
      </template>
      <template #[`item.procedures`]="{ item }">
        <span v-for="procedure in item.procedures" :key="procedure.id"
          >{{ procedure.title }} <br />
        </span>
      </template>
    </v-data-table>
  </section>
</template>

<script>
import { formatDate, formatTime } from "@/functions/tools";
import { list } from "@/functions/cruds";

export default {
  middleware: "private",
  data: () => ({
    loading: false,
    endpoint: "appointments",
    messages: {
      error: "Erro ao carregar as consultas",
    },
    message: {
      show: false,
      type: "",
      text: "",
    },
    headers: [
      { text: "Data", value: "date" },
      { text: "Paciente", value: "patient" },
      { text: "Procedimentos", value: "procedures" },
      { text: "Observações", value: "notes" },
      { text: "Atendida", value: "completed" },
    ],
    items: [],
  }),
  head: {
    title: "Consultas",
  },
  mounted() {
    list(this);
  },
  methods: {
    formatDate,
    formatTime,
  },
};
</script>
