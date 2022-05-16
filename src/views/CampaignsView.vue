<template>
  <AdministrativeNavbar/>
  <div class="camp">
    <h1>Campañas</h1>
    <br>
    <router-link :to="{name: 'crear_camp'}">Crear campaña</router-link>
    <ul>
      <li><router-link :to="{name: 'camp', params: {id: 1}}">Campaña 1</router-link></li>
      <li><router-link :to="{name: 'camp', params: {id: 2}}">Campaña 2</router-link></li>
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
