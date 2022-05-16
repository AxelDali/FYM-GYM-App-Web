<template>
  <div class="home">
    <MachineForm :machine="machine"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MachineForm from '@/components/MachineForm.vue'

export default {
  name: 'CrearMaquinas',
  components: {
    MachineForm
  },
  data () {
    return {
      machine: {
        name: '',
        serial: '',
        finalDate: '',
        period: ''
      }
    }
  }
}
</script>
