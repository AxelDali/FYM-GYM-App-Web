<template>
  <div class="objetivo">
    <h1>Objetivo {{ $route.params.id }}</h1>
    <br>
    <router-link :to="{name: 'objetivos'}">Regresar</router-link>
  </div>
</template>
