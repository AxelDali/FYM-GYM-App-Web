<template>
<br>
  <div class="row align-items-start">
    <div class="col-md-6">
      <h1 style="font-size:32px">Registrar un <span class="styleTitle"> Pago</span></h1>
    </div>
    <div class="col-md-3">
    </div>
    <div class="col-md-3">
    </div>
  </div>
  <div class="row align-items-start">
    <div class="col-md-6">
       <!--                                                    cambio aqui para la busqueda   v   -->
       <input style="width:300px; height:36px" type="text" placeholder="Buscar..." v-model="search">
       <img src="../assets/buscar.png" id="imageSearch">
    </div>
    <div class="col-md-3">
    </div>
    <div class="col-md-3">
    </div>
  </div>
  <div class="row align-items-start">
    <div class="col-md-6">
       <h1 style="font-size:26px;">Lista de socios</h1>
    </div>
    <div class="col-md-3">
    </div>
    <div class="col-md-3">
    </div>
  </div>
  <div class="row align-items-start">
     <div id="tabla">
      <!-- The table component             cambio aqui para la busqueda   v   -->
       <Table :fields='fields' :fieldsNames='fieldsNames' :data='filteredResult' name="Registrar Pago" @edit="edit" @delete="remove"></Table>
     </div>
  </div>
</template>

<script>
import Table from '@/components/PaymentTable'
import { getCollection, deleteDocument } from '@/firebase'
export default {
  name: 'tablaPago',
  components: {
    Table
  },
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
    this.usersData = this.usersData.filter(user => user.type === 'socio')
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
