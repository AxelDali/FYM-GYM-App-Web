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
       <Table :fields='fields' :membresiaData='membresiaData'></Table>
     </div>
  </div>
</template>

<script>
import AdministrativeNavbar from '@/components/AdministrativeNavbar'
import Table from '@/components/tablaMembresia'

export default {
  name: 'tablaMembresia',
  components: {
    AdministrativeNavbar,
    Table
  },
  setup () {
    const membresiaData = [
      { Nombre: 'Gold', Descuento: '20%' },
      { Nombre: 'Platino', Descuento: '25%' }
    ]
    const fields = [
      'Nombre', 'Descuento'
    ]
    return { fields, membresiaData }
  }
}
</script>
