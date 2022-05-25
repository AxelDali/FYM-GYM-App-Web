<template>
  <div class="gimnasio">
    <GymForm v-if="loaded" :gym="gym" edit=true @save="save"/>
  </div>
</template>

<script>
// @ is an alias to /src
import GymForm from '@/components/GymForm'
import { getDocument, updateDocument } from '@/firebase'

export default {
  name: 'CrearGimnasio',
  components: {
    GymForm
  },
  props: {
    id: { type: String, required: true }
  },
  data () {
    return {
      gym: null,
      loaded: false
    }
  },
  async created () {
    this.gym = await getDocument('gyms', this.id)
    this.loaded = true
  },
  methods: {
    save (gym) {
      updateDocument('gyms', this.id, gym)
      this.$router.push({ name: 'gimnasios' })
    }
  }
}
</script>
