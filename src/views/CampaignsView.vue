<template>
  <AdministrativeNavbar/>
  <div class="row align-items-start">
    <div class="col-md-6">
      <h1 style="font-size:32px">Modificar una <span class="styleTitle"> Campaña</span></h1>
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
      <router-link :to="{name: 'crear_camp'}"><button style="padding-right;:280px" type="submit" id="buttonSubmit">Crear Campaña</button></router-link>
    </div>
  </div>
  <div class="row align-items-start">
    <div class="col-md-6">
       <h1 style="font-size:26px;">Lista de campañas</h1>
    </div>
    <div class="col-md-3">
    </div>
    <div class="col-md-3">
    </div>
  </div>
  <div v-if="!fetching" class="row align-items-start">
     <div id="tabla">
      <!-- The table component -->
       <Table :fields='fields' :fieldsNames='fieldsNames' :data='campaignsData' name="camp" @edit="edit" @delete="remove"></Table>
     </div>
  </div>
</template>

<script>
import AdministrativeNavbar from '@/components/AdministrativeNavbar'
import Table from '@/components/CatalogueTable'
import { getCollection, deleteDocument } from '@/firebase'

export default {
  name: 'tablaCampaigns',
  components: {
    AdministrativeNavbar,
    Table
  },
  data () {
    return {
      campaignsData: null,
      fields: ['title', 'discount', 'publicationDate', 'expirationDate'],
      fieldsNames: ['Titulo', 'Descuento', 'Fecha de publicación', 'Fecha de expiración'],
      fetching: true
    }
  },
  async created () {
    this.campaignsData = await getCollection('campaigns')
    this.fetching = false
  },
  methods: {
    async remove (id) {
      await deleteDocument('campaigns', id)
      this.campaignsData = await getCollection('campaigns')
    },
    edit (id) {
      this.$router.push({ name: 'camp', params: { id: id } })
    }
  }
}
</script>
