<template>
  <BarChart />
  <Table :fields='fields' :pagosVData='pagosVData' :pagosPData="pagosPData"></Table>
</template>

<script>
import BarChart from '../components/barChart.vue'
import Table from '../components/tablaPagos.vue'

export default {
  name: 'HomeView',
  components: { BarChart, Table },
  setup () {
    const pagosVData = [
      { Socio: 'Ximena Romero', Fecha_pago: '01/06/2022' },
      { Socio: 'Kevin Gandara', Fecha_pago: '06/06/2022' }
    ]
    const pagosPData = [
      { Socio: 'Axel Gomez', Fecha_pago: '23/05/2022' },
      { Socio: 'Gabriel Mar', Fecha_pago: '24/06/2022' }
    ]
    const fields = [
      'Socio', 'Fecha_pago'
    ]
    return { fields, pagosPData, pagosVData }
  }
}
</script>
