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
        <div>
          <p class="dashboard-appointments__name">{{ item.patient.name }}</p>
          <p class="dashboard-appointments__procedures">
            <span v-for="(procedure, p) in item.procedures" :key="procedure.id">
              {{ procedure.title
              }}{{ p &lt; item.procedures.length - 1 ? ", " : "" }}
            </span>
          </p>
        </div>
        <p class="dashboard-appointments__date">
          {{ Moment(item.date).fromNow() }}
        </p>
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
