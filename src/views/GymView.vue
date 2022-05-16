<template>
  <div class="gimnasio">
    <h1>Gimnasio {{ $route.params.id }}</h1>
    <br>
    <router-link :to="{name: 'gimnasios'}">Regresar</router-link>
  </div>
</template>
