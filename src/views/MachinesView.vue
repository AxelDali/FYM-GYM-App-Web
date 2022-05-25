<template>
  <AdministrativeNavbar/>
  <div class="row align-items-start">
    <div class="col-md-6">
      <h1 style="font-size:32px">Modificar una <span class="styleTitle"> Maquina</span></h1>
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
      <!-- The table component -->
       <Table :fields='fields' :maquinaData='maquinaData'></Table>
     </div>
  </div>
</template>

<script>
import AdministrativeNavbar from '@/components/AdministrativeNavbar'
import Table from '@/components/tablaMaquina'

export default {
  name: 'tablaMaquina',
  components: {
    AdministrativeNavbar,
    Table
  },
  setup () {
    const maquinaData = [
      { Nombre: 'Mancuerna', Gimnasio: 'Titanes GYM', Cantidad: '50' },
      { Nombre: 'Pesa de 50kg', Gimnasio: 'Gema Gyms', Cantidad: '25' }
    ]
    const fields = [
      'Nombre', 'Gimnasio', 'Cantidad'
    ]
    return { fields, maquinaData }
  }
}
</script>
