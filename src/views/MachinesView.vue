<template>
  <AdministrativeNavbar/>
  <div class="row align-items-start">
    <div class="col-md-6">
      <h1 style="font-size:32px">Modificar un <span class="styleTitle"> Maquina</span></h1>
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
      <router-link :to="{name: 'crear_maquina'}"><button style="padding-right;:280px" type="submit" id="buttonSubmit">Crear Maquina</button></router-link>
    </div>
  </div>
  <div class="row align-items-start">
    <div class="col-md-6">
       <h1 style="font-size:26px;">Lista de maquinas</h1>
    </div>
    <div class="col-md-3">
    </div>
    <div class="col-md-3">
    </div>
  </div>
  <div class="row align-items-start">
     <div id="tabla">
      <!-- The table component             cambio aqui para la busqueda   v   -->
       <Table :fields='fields' :fieldsNames='fieldsNames' :data='filteredResult' name="maquina" @edit="edit" @delete="remove"></Table>
     </div>
  </div>
</template>

<script>
import AdministrativeNavbar from '@/components/AdministrativeNavbar'
import Table from '@/components/CatalogueTable'
import { getCollection, deleteDocument } from '@/firebase'

export default {
  name: 'tablaMaquina',
  components: {
    AdministrativeNavbar,
    Table
  },
  data () {
    return {
      machinesData: null,
      fields: ['name', 'gym', 'finalDate', 'period'],
      fieldsNames: ['Nombre', 'Gimnasio', 'Ultima fecha de mantenimiento', 'Periocidad de mantenimiento'],
      fetching: true,
      search: '' // se necesita para la busqueda
    }
  },
  async created () {
    this.machinesData = await getCollection('machines')
    this.fetching = false
  },
  methods: {
    async remove (id) {
      await deleteDocument('machines', id)
      this.machinesData = await getCollection('machines')
    },
    edit (id) {
      this.$router.push({ name: 'maquina', params: { id: id } })
    }
  },
  computed: { // se necesita para la busqueda
    filteredResult () {
      if (!this.machinesData) {
        return
      }
      return this.machinesData.filter((element) => {
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
