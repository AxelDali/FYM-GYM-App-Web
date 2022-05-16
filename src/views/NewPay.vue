<template>
  <div class="home">
    <PaymentForm :payment="payment"/>
  </div>
</template>

<script>
// @ is an alias to /src
import PaymentForm from '@/components/PaymentForm'

export default {
  name: 'CrearPago',
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
