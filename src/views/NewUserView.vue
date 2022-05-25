<template>
  <div class="home">
    <UserForm :user="user" @save="save"/>
  </div>
</template>

<script>
// @ is an alias to /src
import UserForm from '@/components/UserForm'
import { addDocument } from '@/firebase'

export default {
  name: 'CrearUsuario',
  components: {
    UserForm
  },
  data () {
    return {
      user: {
        type: 'socio'
      }
    }
  },
  methods: {
    save (user) {
      addDocument('users', user)
      this.$router.push({ name: 'usuarios' })
    }
  }
}
</script>
