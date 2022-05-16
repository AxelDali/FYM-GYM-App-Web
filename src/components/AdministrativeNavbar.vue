<template>
  <nav>
    <router-link :to="{name: 'camp_principal'}">Campañas</router-link> |
    <router-link :to="{name: 'objetivos_principal'}">Objetivos</router-link> |
    <router-link :to="{name: 'membresias_principal'}">Membresias</router-link> |
    <router-link :to="{name: 'gimnasios_principal'}">Gimnasios</router-link> |
    <router-link :to="{name: 'maquinas_principal'}">Maquinas</router-link>
  </nav>
</template>

<style scoped>
  nav a {
    font-weight: bold;
    color: #000000;
    padding-left:5px;
    padding-right:5px;
    text-decoration: none;
}

  nav a.router-link-active {
      color: #F29F05;
  }

  nav a:hover {
      color: #8C5F0A;
  }

  nav {
      font-family: 'Poppins', sans-serif;
  }
</style>
