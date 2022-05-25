<template>
  <nav>
    <router-link :to="{name: 'camp_principal'}">Campañas</router-link> |
    <router-link :to="{name: 'objetivos_principal'}">Objetivos</router-link> |
    <router-link :to="{name: 'membresias_principal'}">Membresías</router-link> |
    <router-link :to="{name: 'gimnasios_principal'}">Gimnasios</router-link> |
    <router-link :to="{name: 'maquinas_principal'}">Maquinas</router-link>
  </nav>
</template>

<style scoped>
  @import '@/assets/styles.css';
  nav a {
    color: #000000;
  }

  nav a.router-link-active {
    color: #F29F05;
  }

  nav a:hover {
      color: #8C5F0A;
  }
</style>
