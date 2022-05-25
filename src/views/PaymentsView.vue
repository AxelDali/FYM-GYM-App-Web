<template>
  <AdministrativeNavbar/>
  <div class="row align-items-start">
    <div class="col-md-6">
      <h1 style="font-size:32px">Registrar un <span class="styleTitle"> Pago</span></h1>
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
    </div>
  </div>
  <div class="row align-items-start">
    <div class="col-md-6">
       <h1 style="font-size:26px;">Lista de socios</h1>
    </div>
    <div class="col-md-3">
    </div>
    <div class="col-md-3">
    </div>
  </div>
  <div class="row align-items-start">
     <div id="tabla">
      <!-- The table component -->
       <Table :fields='fields' :pagoData='pagoData'></Table>
     </div>
  </div>
</template>

<script>
import AdministrativeNavbar from '@/components/AdministrativeNavbar'
import Table from '@/components/tablaPago'

export default {
  name: 'tablaPago',
  components: {
    AdministrativeNavbar,
    Table
  },
  setup () {
    const pagoData = [
      { Nombre: 'Axel Gomez', Telefono: '6251158963', Correo: 'gabriel@gmail.com', Fecha_corte: '22/05/2022' },
      { Nombre: 'Gabriel Mar', Telefono: '6241447896', Correo: 'dali@gamil.com', Fecha_corte: '23/05/2022' }
    ]
    const fields = [
      'Nombre', 'Teléfono', 'Correo', 'Fecha_corte'
    ]
    return { fields, pagoData }
  }
}
</script>
