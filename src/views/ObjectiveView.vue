<template>
  <div class="cliente">
    <ObjectiveForm v-if="loaded" :objective="objective" edit=true @save="save"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ObjectiveForm from '@/components/ObjectiveForm'
import { getDocument, updateDocument } from '@/firebase'

export default {
  name: 'CrearUsuario',
  components: {
    ObjectiveForm
  },
  props: {
    id: { type: String, required: true }
  },
  data () {
    return {
      objective: null,
      loaded: false
    }
  },
  async created () {
    this.objective = await getDocument('objectives', this.id)
    this.loaded = true
  },
  methods: {
    save (objective) {
      updateDocument('objectives', this.id, objective)
      this.$router.push({ name: 'objetivos' })
    }
  }
}
</script>
