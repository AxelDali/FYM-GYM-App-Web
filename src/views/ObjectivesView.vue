<template>
  <AdministrativeNavbar/>
  <div class="objetivos">
    <h1>Objetivos</h1>
    <br>
    <router-link :to="{name: 'crear_objetivo'}">Crear objetivo</router-link>
    <ul>
      <li><router-link :to="{name: 'objetivo', params: {id: 1}}">Objetivo 1</router-link></li>
      <li><router-link :to="{name: 'objetivo', params: {id: 2}}">Objetivo 2</router-link></li>
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
