<template>
  <div class="home">
    <GymForm :gym="gym"/>
  </div>
</template>

<script>
// @ is an alias to /src
import GymForm from '@/components/GymForm'

export default {
  name: 'CrearGimnasio',
  components: {
    GymForm
  },
  data () {
    return {
      gym: {
        name: '',
        period: '',
        discount: ''
      }
    }
  }
}
</script>
