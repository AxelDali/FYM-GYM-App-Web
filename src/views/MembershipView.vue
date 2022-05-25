<template>
  <div class="membresia">
    <MembershipForm v-if="loaded" :membership="membership" edit=true @save="save"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MembershipForm from '@/components/MembershipForm'
import { getDocument, updateDocument } from '@/firebase'

export default {
  name: 'CrearMembresia',
  components: {
    MembershipForm
  },
  props: {
    id: { type: String, required: true }
  },
  data () {
    return {
      membership: null,
      loaded: false
    }
  },
  async created () {
    this.membership = await getDocument('memberships', this.id)
    this.loaded = true
  },
  methods: {
    save (membership) {
      updateDocument('memberships', this.id, membership)
      this.$router.push({ name: 'membresias' })
    }
  }
}
</script>
