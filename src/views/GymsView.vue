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
       <Table :fields='fields' :gymData='gymData'></Table>
     </div>
  </div>
</template>

<script>
import AdministrativeNavbar from '@/components/AdministrativeNavbar'
import Table from '@/components/tablaGym'

export default {
  name: 'tablaGym',
  components: {
    AdministrativeNavbar,
    Table
  },
  setup () {
    const gymData = [
      { Nombre: 'Titanes GMY', Teléfono: '6251158963', Mensualidad: '350', Aforo: '25' },
      { Nombre: 'Golden GYM', Teléfono: '6241447896', Mensualidad: '500', Aforo: '30' }
    ]
    const fields = [
      'Nombre', 'Teléfono', 'Mensualidad', 'Aforo'
    ]
    return { fields, gymData }
  }
}
</script>
