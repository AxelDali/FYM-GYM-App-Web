<template>
  <AdministrativeNavbar/>
  <div class="membresias">
    <h1>Membresias</h1>
    <br>
    <router-link :to="{name: 'crear_membresia'}">Crear membresia</router-link>
    <ul>
      <li><router-link :to="{name: 'membresia', params: {id: 1}}">Membresia 1</router-link></li>
      <li><router-link :to="{name: 'membresia', params: {id: 2}}">Membresia 2</router-link></li>
    </ul>
  </div>
</template>

<script>
import AdministrativeNavbar from '@/components/AdministrativeNavbar'

export default {
  components: {
    AdministrativeNavbar
  }
}
</script>
