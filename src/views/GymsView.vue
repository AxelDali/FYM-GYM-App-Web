<template>
  <AdministrativeNavbar/>
  <div class="gimnasios">
    <h1>Gimnasios</h1>
    <br>
    <router-link :to="{name: 'crear_gimnasio'}">Crear gimnasio</router-link>
    <ul>
      <li><router-link :to="{name: 'gimnasio', params: {id: 1}}">Gimnasio 1</router-link></li>
      <li><router-link :to="{name: 'gimnasio', params: {id: 2}}">Gimnasio 2</router-link></li>
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
