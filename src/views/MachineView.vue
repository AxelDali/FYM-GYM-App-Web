<template>
  <div class="maquinas">
    <MachineForm v-if="loaded" :machine="machine" edit=true @save="save"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MachineForm from '@/components/MachineForm'
import { getDocument, updateDocument } from '@/firebase'

export default {
  name: 'CrearMaquinas',
  components: {
    MachineForm
  },
  props: {
    id: { type: String, required: true }
  },
  data () {
    return {
      machine: null,
      loaded: false
    }
  },
  async created () {
    this.machine = await getDocument('machines', this.id)
    this.loaded = true
  },
  methods: {
    save (machine) {
      updateDocument('machines', this.id, machine)
      this.$router.push({ name: 'maquinas' })
    }
  }
}
</script>
