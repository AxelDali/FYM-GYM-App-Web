<template>
  <div class="home">
    <PaymentForm :payment="payment"/>
  </div>
</template>

<script>
// @ is an alias to /src
import PaymentForm from '@/components/PaymentForm.vue'

export default {
  name: 'CrearMembresia',
  components: {
    PaymentForm
  },
  data () {
    return {
      payment: {
        name: '',
        period: '',
        discount: ''
      }
    }
  }
}
</script>
