<template>
  <section class="dashboard">
    <div class="page-header">
      <h1 class="page-header__title">Painel de controle</h1>
    </div>
    <Consultas />
  </section>
</template>

<script>
import Consultas from "@/components/dashboard/Consultas";

export default {
  components: {
    Consultas,
  },
  middleware: "private",
};
</script>
