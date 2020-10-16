<template>
  <section class="patients">
    <h1>Novo paciente</h1>

    <v-text-field
      v-model="data.name"
      label="Nome"
      outlined
      hide-details
      type="name"
      prepend-inner-icon="mdi-account"
    />
    <v-text-field
      v-model="data.email"
      :rules="emailValidation"
      label="E-mail"
      outlined
      hide-details
      type="email"
      prepend-inner-icon="mdi-email"
    />
    <v-text-field
      v-model="data.phone"
      v-mask="['(##) ####-####', '(##) #####-####']"
      :rules="phoneValidation"
      label="Telefone"
      outlined
      hide-details
      type="text"
      prepend-inner-icon="mdi-phone"
    />
    <v-textarea
      v-model="data.additional"
      label="Informações adicionais"
      outlined
    />
    <v-btn :disabled="loading" :loading="loading" @click="registerPatient"
      >Cadastrar</v-btn
    >
    <nuxt-link to="/pacientes">Voltar para Pacientes</nuxt-link>
    <v-alert v-if="message.show" :type="message.type">
      {{ message.text }}
    </v-alert>
  </section>
</template>

<script>
import { mask } from "vue-the-mask";
import { phoneValidation, emailValidation } from "@/functions/formUtils";
import { register } from "@/functions/cruds";

export default {
  directives: { mask },
  middleware: "private",
  data: () => ({
    loading: false,
    phoneValidation,
    emailValidation,
    endpoint: "patients",
    data: {
      name: "",
      email: "",
      phone: "",
      additional: "",
    },
    messages: {
      success: "Paciente cadastrado com sucesso",
      error: "Erro ao cadastrar o paciente",
    },
    message: {
      show: false,
      type: "",
      text: "",
    },
  }),
  head: {
    title: "Novo paciente",
  },
  methods: {
    registerPatient() {
      register(this);
    },
  },
};
</script>
