<template>
  <div class="home">
    <ObjetiveForm :obejtive="objetive"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ObjetiveForm from '@/components/ObjectiveForm.vue'

export default {
  name: 'CrearObjetivo',
  components: {
    ObjetiveForm
  },
  data () {
    return {
      Objetive: {
        name: '',
        description: ''
      }
    }
  }
}
</script>
