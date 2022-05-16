<template>
  <br>
  <router-link :to="{name: 'membresias'}">Regresar</router-link>
  <div class="home">
    <h1>Registra una membresia</h1>
    <MembershipForm :membership="membership"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MembershipForm from '@/components/MembershipForm'

export default {
  name: 'CrearMembresia',
  components: {
    MembershipForm
  },
  data () {
    return {
      membership: {
        name: '',
        period: '',
        discount: ''
      }
    }
  }
}
</script>
