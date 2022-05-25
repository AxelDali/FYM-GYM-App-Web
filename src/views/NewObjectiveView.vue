<template>
  <div class="home">
    <ObjectiveForm :objective="objective"  @save="save"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ObjectiveForm from '@/components/ObjectiveForm'
import { addDocument } from '@/firebase'

export default {
  name: 'CrearObjetivo',
  components: {
    ObjectiveForm
  },
  data () {
    return {
      Objective: {}
    }
  },
  methods: {
    save (objective) {
      addDocument('objectives', objective)
      this.$router.push({ name: 'objetivos' })
    }
  }
}
</script>
