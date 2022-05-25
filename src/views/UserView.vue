<template>
  <div class="cliente">
    <UserForm v-if="loaded" :user="user" edit="true" @save="save"/>
  </div>
</template>

<script>
// @ is an alias to /src
import UserForm from '@/components/UserForm'
import { getDocument, updateDocument } from '@/firebase'

export default {
  name: 'CrearUsuario',
  components: {
    UserForm
  },
  props: {
    id: { type: String, required: true }
  },
  data () {
    return {
      user: null,
      loaded: false
    }
  },
  async created () {
    this.user = await getDocument('users', this.id)
    this.loaded = true
  },
  methods: {
    save (user) {
      updateDocument('users', this.id, user)
      this.$router.push({ name: 'usuarios' })
    }
  }
}
</script>
