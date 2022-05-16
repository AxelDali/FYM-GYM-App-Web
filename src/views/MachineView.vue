<template>
  <div class="maquina">
    <h1>Maquina {{ $route.params.id }}</h1>
    <br>
    <router-link :to="{name: 'maquinas'}">Regresar</router-link>
  </div>
</template>
