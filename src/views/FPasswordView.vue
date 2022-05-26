<template>
 <div class="home">
    <FPasswordForm :FPassword="FPassword"/>
  </div>
</template>
<script>
import FPasswordForm from '@/components/FPasswordForm.vue'

export default {
  components: {
    FPasswordForm
  },
  data () {
    return {
      FPassword: {
        email: '',
        password: ''
      }
    }
  }
}
</script>
