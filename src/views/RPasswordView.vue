<template>
 <div class="home">
    <RPasswordForm :RPassword="RPassword"/>
  </div>
</template>
<script>
import RPasswordForm from '@/components/RPasswordForm.vue'

export default {
  components: {
    RPasswordForm
  },
  data () {
    return {
      RPassword: {
        email: '',
        password: ''
      }
    }
  }
}
</script>
