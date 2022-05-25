<template>
  <AdministrativeNavbar/>
  <div class="row align-items-start">
    <div class="col-md-6">
      <h1 style="font-size:32px">Modificar un <span class="styleTitle"> Gimnasio</span></h1>
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
      <router-link :to="{name: 'crear_gimnasio'}"><button style="padding-right;:280px" type="submit" id="buttonSubmit">Crear Gimnasio</button></router-link>
    </div>
  </div>
  <div class="row align-items-start">
    <div class="col-md-6">
       <h1 style="font-size:26px;">Lista de gimnasios</h1>
    </div>
    <div class="col-md-3">
    </div>
    <div class="col-md-3">
    </div>
  </div>
  <div class="row align-items-start">
     <div id="tabla">
      <!-- The table component -->
       <Table :fields='fields' :fieldsNames='fieldsNames' :data='gymsData' name="gimnasio" @delete="remove" @edit="edit"></Table>
     </div>
  </div>
</template>

<script>
import AdministrativeNavbar from '@/components/AdministrativeNavbar'
import Table from '@/components/CatalogueTable'
import { getCollection, deleteDocument } from '@/firebase'

export default {
  name: 'tablaGym',
  components: {
    AdministrativeNavbar,
    Table
  },
  data () {
    return {
      gymsData: null,
      fields: ['name', 'phone', 'cost', 'capacity'],
      fieldsNames: ['Nombre', 'Teléfono', 'Mensualidad', 'Aforo'],
      fetching: true
    }
  },
  async created () {
    this.gymsData = await getCollection('gyms')
    this.fetching = false
  },
  methods: {
    async remove (id) {
      await deleteDocument('gyms', id)
      this.gymsData = await getCollection('gyms')
    },
    edit (id) {
      this.$router.push({ name: 'gimnasio', params: { id: id } })
    }
  }
}
</script>
