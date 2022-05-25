<template>
  <AdministrativeNavbar/>
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
       <Table :fields='fields' :usuarioData='usuarioData'></Table>
     </div>
  </div>
</template>

<script>
import AdministrativeNavbar from '@/components/AdministrativeNavbar'
import Table from '@/components/tablaUsuario'

export default {
  name: 'tablaUsuario',
  components: {
    AdministrativeNavbar,
    Table
  },
  setup () {
    const usuarioData = [
      { Nombre: 'Axel Gomez', Telefono: '6251158963', Correo: 'gabriel@gmail.com', Tipo_Usuario: 'Socio' },
      { Nombre: 'Gabriel Mar', Telefono: '6241447896', Correo: 'dali@gamil.com', Tipo_Usuario: 'Instructor' }
    ]
    const fields = [
      'Nombre', 'Telefono', 'Correo', 'Tipo_Usuario'
    ]
    return { fields, usuarioData }
  }
}
</script>
