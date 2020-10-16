<template>
  <section class="patients">
    <h1>Nova consulta</h1>

    <Datetime v-model="data.date" type="datetime"></Datetime>
    <v-textarea v-model="data.notes" label="Observações" outlined />
    <v-select
      v-model="data.procedures"
      label="Procedimentos"
      :items="procedures"
      item-text="title"
      item-value="id"
      multiple
    ></v-select>
    <v-autocomplete
      v-model="data.patient"
      label="Pacientes"
      :items="patients"
      item-text="name"
      item-value="id"
    ></v-autocomplete>
    <v-btn :disabled="loading" :loading="loading" @click="registerClinic"
      >Cadastrar</v-btn
    >
    <nuxt-link to="/consultas">Voltar para consultas</nuxt-link>
    <v-alert v-if="message.show" :type="message.type">
      {{ message.text }}
    </v-alert>
  </section>
</template>

<script>
import { Datetime } from "vue-datetime";
import { Settings } from "luxon";
import { register } from "@/functions/cruds";
import { listPatients, listProcedures } from "@/functions/population";

Settings.defaultLocale = "pt-br";

export default {
  components: { Datetime },
  middleware: "private",
  data: () => ({
    loading: false,
    endpoint: "appointments",
    data: {
      date: new Date(),
      patient: 0,
      procedures: [],
      notes: "",
    },
    procedures: [],
    patients: [],
    messages: {
      success: "Consulta cadastrada com sucesso",
      error: "Erro ao cadastrar a consulta",
    },
    message: {
      show: false,
      type: "",
      text: "",
    },
  }),
  head: {
    title: "Nova consulta",
  },
  beforeMount() {
    listPatients(this);
    listProcedures(this);
  },
  methods: {
    registerClinic() {
      register(this);
    },
    listPatients,
    listProcedures,
  },
};
</script>
