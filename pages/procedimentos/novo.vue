<template>
  <section class="patients">
    <h1 class="main-title">Novo procedimento</h1>
    <v-text-field
      v-model="data.title"
      label="Título"
      outlined
      hide-details
      type="text"
    />
    <v-text-field
      v-model="data.value"
      label="Valor em reais"
      prefix="R$"
      outlined
      hide-details
      type="number"
    />
    <v-textarea v-model="data.description" label="Descrição" outlined />
    <v-btn
      :disabled="loading"
      :loading="loading"
      color="primary"
      @click="registerProcedure"
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
    endpoint: "procedures",
    data: {
      title: "",
      description: "",
      value: 0,
    },
    messages: {
      success: "Procedimento cadastrado com sucesso",
      error: "Erro ao cadastrar o procedimento",
    },
    message: {
      show: false,
      type: "",
      text: "",
    },
  }),
  head: {
    title: "Novo procedimento",
  },
  methods: {
    registerProcedure() {
      register(this);
    },
  },
};
</script>
