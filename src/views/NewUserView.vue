<template>
  <div class="home">
    <UserForm :user="user"/>
  </div>
</template>

<script>
// @ is an alias to /src
import UserForm from '@/components/UserForm.vue'

export default {
  name: 'CrearUsuario',
  components: {
    UserForm
  },
  data () {
    return {
      user: {
        name: '',
        period: '',
        discount: ''
      }
    }
  }
}
</script>
