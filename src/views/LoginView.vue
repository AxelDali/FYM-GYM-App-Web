<template>
 <div class="home">
    <LoginForm :login="login"/>
  </div>
</template>
<script>
import LoginForm from '@/components/loginForm.vue'

export default {
  components: {
    LoginForm
  },
  data () {
    return {
      login: {
        email: '',
        password: ''
      }
    }
  }
}
</script>
