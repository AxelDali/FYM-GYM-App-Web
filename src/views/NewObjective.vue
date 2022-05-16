<template>
  <div class="home">
    <ObjectiveForm :objective="objective"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ObjectiveForm from '@/components/ObjectiveForm'

export default {
  name: 'CrearObjetivo',
  components: {
    ObjectiveForm
  },
  data () {
    return {
      Objective: {
        name: '',
        description: ''
      }
    }
  }
}
</script>
