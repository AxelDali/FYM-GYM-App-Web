<template>
  <div class="camp">
    <h1>Campaña {{ $route.params.id }}</h1>
    <br>
    <router-link :to="{name: 'camps'}">Regresar</router-link>
  </div>
</template>
