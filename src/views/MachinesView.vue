<template>
  <AdministrativeNavbar/>
  <div class="maquinas">
    <h1>Maquinas</h1>
    <br>
    <router-link :to="{name: 'crear_maquina'}">Crear maquina</router-link>
    <ul>
      <li><router-link :to="{name: 'maquina', params: {id: 1}}">Maquina 1</router-link></li>
      <li><router-link :to="{name: 'maquina', params: {id: 2}}">Maquina 2</router-link></li>
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
