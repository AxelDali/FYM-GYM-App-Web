<template>
  <div class="home">
    <MachineForm :machine="machine" @save="save"/>
  </div>
</template>

<script>
// @ is an alias to /src
import { addDocument } from '@/firebase'
import MachineForm from '@/components/MachineForm.vue'

export default {
  name: 'CrearMaquina',
  components: {
    MachineForm
  },
  data () {
    return {
      machine: {}
    }
  },
  methods: {
    save (machine) {
      addDocument('machines', machine)
      this.$router.push({ name: 'maquinas' })
    }
  }
}
</script>
