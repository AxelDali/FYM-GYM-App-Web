<template>
  <nav class="navbar navbar-custom navbar-expand-md">
    <div class="container-fluid">
      <router-link class="navbar-brand" :to="{name: 'panel_de_control'}">
        <img src="./assets/logo.png" alt="" width="200" class="d-inline-block align-text-center">
      </router-link>
      <div class="navbar-collapse collapse w-100 order-3 dual-collapse2" v-if="showNavBar">
        <div class="navbar-nav ms-auto">
          <router-link class="nav-item" :to="{name: 'panel_de_control'}">Panel de Control</router-link> |
          <router-link class="nav-item" :to="{name: 'usuarios_principal'}">Usuarios</router-link> |
          <router-link class="nav-item" :to="{name: 'pagos_principal'}">Pagos</router-link> |
          <router-link class="nav-item" :to="{name: 'citas'}">Citas</router-link> |
          <router-link class="nav-item" :to="{name: 'administracion_principal'}">Administracion</router-link> |
        </div>
        <div class="btn-group">
          <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
            <img src="./assets/profile.png" alt="" width="50" class="rounded-image d-inline-block align-text-center ">
          </button>
          <ul class="dropdown-menu dropdown-menu-lg-end">
            <li><a class="dropdown-item" href="#">Perfil</a></li>
            <li><a class="dropdown-item" href="/changePassword">Actualizar Contraseña</a></li>
            <li><a class="dropdown-item" href="/">Cerrar sesion</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <router-view/>
</template>

<script>

export default ({
  computed: {
    showNavBar () {
      return !(this.$route.name === 'login' || this.$route.name === 'forgetPassword')
    }
  }
})
</script>

<style>
@import './assets/styles.css';
</style>
