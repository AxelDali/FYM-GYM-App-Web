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
  <div class="row align-items-start">
     <div id="tabla">
      <!-- The table component -->
       <Table :fields='fields' :campaignsData='campaignsData'></Table>
     </div>
  </div>
</template>

<script>
import AdministrativeNavbar from '@/components/AdministrativeNavbar'
import Table from '@/components/tablaCampaigns'

export default {
  name: 'tablaCampaigns',
  components: {
    AdministrativeNavbar,
    Table
  },
  setup () {
    const campaignsData = [
      { Titulo_promocion: 'Unete a la familia', Porcentaje_descuento: '25%', Fecha_inicio: '22/05/2022', Fecha_final: '22/06/2022' },
      { Titulo_promocion: 'Energiza tu cuerpo', Porcentaje_descuento: '10%', Fecha_inicio: '20/05/2022', Fecha_final: '08/06/2022' }
    ]
    const fields = [
      'Titulo_promocion', 'Porcentaje_descuento', 'Fecha_inicio', 'Fecha_final'
    ]
    return { fields, campaignsData }
  }
}
</script>
