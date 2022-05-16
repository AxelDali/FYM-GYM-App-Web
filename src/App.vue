<template>
  <nav class="navbar navbar-custom navbar-expand-md">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="./assets/logo.png" alt="" width="200" class="d-inline-block align-text-center">
      </a>
      <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
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
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <router-view/>
</template>

<style>
@import './assets/styles.css';
</style>
