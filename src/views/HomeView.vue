<template>
  <BarChart />
  <br>
  <br>
  <div class="row">
    <div class="col md-6">
      <h1 style="font-size:28px">Pagos proximos a vencer</h1>
    </div>
    <div class="col md-6">
      <h1 style="font-size:28px">Pagos vencidos</h1>
    </div>
  </div>
  <div class="row">
    <div class="col md-6">
      <Table :fields='fields' :fieldsNames='fieldsNames' :data='filteredResult' name="Registrar Pago" @edit="edit" @delete="remove"></Table>
    </div>
    <div class="col md-6">
      <Table :fields='fields' :fieldsNames='fieldsNames' :data='filteredResult' name="Ir al perfil" @edit="edit" @delete="remove"></Table>
    </div>
  </div>
</template>

<script>
import BarChart from '../components/barChart.vue'
import Table from '../components/PaymentTable.vue'
import { getCollection, deleteDocument } from '@/firebase'
export default {
  name: 'HomeView',
  components: { BarChart, Table },
  data () {
    return {
      usersData: null,
      fields: ['name', 'lastName', 'phone', 'email', 'enterDate'],
      fieldsNames: ['Nombre', 'Apellido', 'Teléfono', 'Correo', 'Fecha de pago'],
      fetching: true,
      search: '' // se necesita para la busqueda
    }
  },
  async created () {
    this.usersData = await getCollection('users')
    this.fetching = false
  },
  methods: {
    async remove (id) {
      await deleteDocument('users', id)
      this.usersData = await getCollection('users')
    },
    edit (id) {
      this.$router.push({ name: 'usuario', params: { id: id } })
    }
  },
  computed: { // se necesita para la busqueda
    filteredResult () {
      if (!this.usersData) {
        return
      }
      return this.usersData.filter((element) => {
        console.log(element)
        let flag = false
        this.fields.forEach(field => {
          if (element[field].toString().toLowerCase().match(this.search.toLowerCase())) {
            flag = true
          }
        })
        return flag
      })
    }
  }
}
</script>
