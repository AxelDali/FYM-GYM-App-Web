<template>
 <div class="home">
    <CPasswordForm :CPassword="CPassword"/>
  </div>
</template>
<script>
import CPasswordForm from '@/components/CPasswordForm.vue'

export default {
  components: {
    CPasswordForm
  },
  data () {
    return {
      CPassword: {
        password: ''
      }
    }
  }
}
</script>
