<template>
  <section class="clinics">
    <h1 class="display-1">Nova clínica</h1>
    <v-text-field
      v-model="data.title"
      label="Nome"
      outlined
      hide-details
      type="name"
      prepend-inner-icon="mdi-account"
    />
    <v-textarea v-model="data.address" label="Endereço" outlined />
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
import { register } from "@/functions/cruds";

export default {
  middleware: "private",
  data: () => ({
    loading: false,
    endpoint: "clinics",
    data: {
      title: "",
      address: "",
    },
    messages: {
      success: "Clínica cadastrada com sucesso",
      error: "Erro ao cadastrar a clínica",
    },
    message: {
      show: false,
      type: "",
      text: "",
    },
  }),
  head: {
    title: "Nova clínica",
  },
  methods: {
    registerClinic() {
      register(this);
    },
  },
};
</script>
