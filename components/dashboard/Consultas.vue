<template>
  <section class="dashboard-block">
    <h2 class="dashboard-block__title">Consultas do dia</h2>
    <p v-if="loading">carregando...</p>
    <ul v-else class="dashboard-appointments">
      <li
        v-for="item in items"
        :key="item.id"
        class="dashboard-appointments__item"
      >
        <p class="dashboard-appointments__name">{{ item.patient.name }}</p>
        {{ Moment(item.date).fromNow() }}
      </li>
    </ul>
    <p v-if="!loading && items.length === 0">
      Nenhuma consulta marcada para hoje
    </p>
  </section>
</template>

<script>
import Moment from "moment";
Moment.locale("pt-br");
import { dailyAppointments } from "@/functions/dashboard";

export default {
  data: () => ({
    loading: true,
    items: [],
  }),
  beforeMount() {
    dailyAppointments(this);
  },
  methods: {
    Moment,
  },
};
</script>
