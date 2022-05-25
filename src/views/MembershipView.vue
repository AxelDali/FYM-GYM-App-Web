<template>
  <div class="membresia">
    <h1>Membresía {{ $route.params.id }}</h1>
    <br>
    <router-link :to="{name: 'membresias'}">Regresar</router-link>
  </div>
</template>
