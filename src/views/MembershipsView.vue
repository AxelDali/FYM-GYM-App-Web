<template>
  <AdministrativeNavbar/>
  <div class="row align-items-start">
    <div class="col-md-6">
      <h1 style="font-size:32px">Modificar una <span class="styleTitle"> Membresía</span></h1>
    </div>
    <div class="col-md-3">
    </div>
    <div class="col-md-3">
    </div>
  </div>
  <div class="row align-items-start">
    <div class="col-md-6">
       <input style="width:300px; height:36px" type="text" placeholder="Buscar...">
       <img src="../assets/buscar.png" id="imageSearch">
    </div>
    <div class="col-md-3">
    </div>
    <div class="col-md-3">
      <router-link :to="{name: 'crear_membresia'}"><button style="padding-right;:280px" type="submit" id="buttonSubmit">Crear Membresía</button></router-link>
    </div>
  </div>
  <div class="row align-items-start">
    <div class="col-md-6">
       <h1 style="font-size:26px;">Lista de membresías</h1>
    </div>
    <div class="col-md-3">
    </div>
    <div class="col-md-3">
    </div>
  </div>
  <div class="row align-items-start">
     <div id="tabla">
      <!-- The table component -->
       <Table :fields='fields' :fieldsNames='fieldsNames' :data='membershipsData' name="membresía" @delete="remove" @edit="edit"></Table>
     </div>
  </div>
</template>

<script>
import AdministrativeNavbar from '@/components/AdministrativeNavbar'
import Table from '@/components/CatalogueTable'
import { getCollection, deleteDocument } from '@/firebase'

export default {
  name: 'tablaMembresia',
  components: {
    AdministrativeNavbar,
    Table
  },
  data () {
    return {
      membershipsData: null,
      fields: ['name', 'period', 'discount'],
      fieldsNames: ['Nombre', 'Periodo', 'Porcentaje de descuento'],
      fetching: true
    }
  },
  async created () {
    this.membershipsData = await getCollection('memberships')
    this.fetching = false
  },
  methods: {
    async remove (id) {
      await deleteDocument('memberships', id)
      this.membershipsData = await getCollection('memberships')
    },
    edit (id) {
      this.$router.push({ name: 'membresia', params: { id: id } })
    }
  }
}
</script>
