<template>
  <br>
  <div class="row align-items-start">
    <div class="col-md-6">
      <h1 style="font-size:32px">Modificar un <span class="styleTitle"> Usuario</span></h1>
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
      <router-link :to="{name: 'crear_usuario'}"><button style="padding-right;:280px" type="submit" id="buttonSubmit">Crear Usuario</button></router-link>
    </div>
  </div>
  <div class="row align-items-start">
    <div class="col-md-6">
       <h1 style="font-size:26px;">Lista de usuarios</h1>
    </div>
    <div class="col-md-3">
    </div>
    <div class="col-md-3">
    </div>
  </div>
  <div class="row align-items-start">
     <div id="tabla">
      <!-- The table component -->
       <Table :fields='fields' :fieldsNames='fieldsNames' :data='usersData' name="usuario" @delete="remove" @edit="edit"></Table>
     </div>
  </div>
</template>

<script>
import Table from '@/components/CatalogueTable'
import { getCollection, deleteDocument } from '@/firebase'

export default {
  name: 'tablaUsuario',
  components: {
    Table
  },
  data () {
    return {
      usersData: null,
      fields: ['name', 'lastName', 'phone', 'email', 'type'],
      fieldsNames: ['Nombre', 'Apellido', 'Teléfono', 'Correo', 'Tipo de usuario'],
      fetching: true
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
  }
}
</script>
