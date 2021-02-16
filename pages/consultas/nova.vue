<template>
  <section class="patients">
    <h1 class="main-title">Nova consulta</h1>
    <v-icon>mdi-calendar</v-icon>
    Selecione uma data e hora
    <Datetime v-model="data.date" type="datetime"></Datetime>
    <v-autocomplete
      v-model="data.patient"
      label="Selecione o paciente"
      :items="patients"
      item-text="name"
      item-value="id"
    ></v-autocomplete>
    <v-select
      v-model="data.procedures"
      label="Procedimentos realizados"
      :items="procedures"
      item-text="title"
      item-value="id"
      multiple
    ></v-select>
    <v-textarea v-model="data.notes" label="Observações" outlined />
    <v-btn
      :disabled="loading"
      :loading="loading"
      color="primary"
      @click="registerClinic"
      >Cadastrar</v-btn
    >
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
