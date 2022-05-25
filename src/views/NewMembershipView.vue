<template>
  <div class="home">
    <MembershipForm :membership="membership"  @save="save"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MembershipForm from '@/components/MembershipForm'
import { addDocument } from '@/firebase'

export default {
  name: 'CrearMembresia',
  components: {
    MembershipForm
  },
  data () {
    return {
      membership: {}
    }
  },
  methods: {
    save (membership) {
      addDocument('memberships', membership)
      this.$router.push({ name: 'membresias' })
    }
  }
}
</script>
