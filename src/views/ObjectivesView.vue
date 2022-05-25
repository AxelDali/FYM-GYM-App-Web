<template>
  <AdministrativeNavbar/>
  <div class="row align-items-start">
    <div class="col-md-6">
      <h1 style="font-size:32px">Modificar un <span class="styleTitle"> Objetivo</span></h1>
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
      <router-link :to="{name: 'crear_objetivo'}"><button style="padding-right;:280px" type="submit" id="buttonSubmit">Crear Objetivo</button></router-link>
    </div>
  </div>
  <div class="row align-items-start">
    <div class="col-md-6">
       <h1 style="font-size:26px;">Lista de objetivos</h1>
    </div>
    <div class="col-md-3">
    </div>
    <div class="col-md-3">
    </div>
  </div>
  <div class="row align-items-start">
     <div id="tabla">
      <!-- The table component -->
       <Table :fields='fields' :fieldsNames='fieldsNames' :data='objectivesData' name="objetivo" @delete="remove" @edit="edit"></Table>
     </div>
  </div>
</template>

<script>
import AdministrativeNavbar from '@/components/AdministrativeNavbar'
import Table from '@/components/CatalogueTable'
import { getCollection, deleteDocument } from '@/firebase'

export default {
  name: 'tablaObjetivo',
  components: {
    AdministrativeNavbar,
    Table
  },
  data () {
    return {
      objectivesData: null,
      fields: ['name', 'description'],
      fieldsNames: ['Nombre', 'Descripción'],
      fetching: true
    }
  },
  async created () {
    this.objectivesData = await getCollection('objectives')
    this.fetching = false
  },
  methods: {
    async remove (id) {
      await deleteDocument('objectives', id)
      this.objectivesData = await getCollection('objectives')
    },
    edit (id) {
      this.$router.push({ name: 'objetivo', params: { id: id } })
    }
  }
}
</script>
