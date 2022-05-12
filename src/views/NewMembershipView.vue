<template>
  <div class="home">
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
