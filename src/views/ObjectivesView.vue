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
       <!--                                                    cambio aqui para la busqueda   v   -->
       <input style="width:300px; height:36px" type="text" placeholder="Buscar..." v-model="search">
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
      <!-- The table component             cambio aqui para la busqueda   v   -->
       <Table :fields='fields' :fieldsNames='fieldsNames' :data='filteredResult' name="camp" @edit="edit" @delete="remove"></Table>
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
      fetching: true,
      search: '' // se necesita para la busqueda
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
  },
  computed: { // se necesita para la busqueda
    filteredResult () {
      if (!this.objectivesData) {
        return
      }
      return this.objectivesData.filter((element) => {
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
