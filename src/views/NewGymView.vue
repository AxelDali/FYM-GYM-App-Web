<template>
  <div class="home">
    <GymForm :gym="gym" @save="save"/>
  </div>
</template>

<script>
// @ is an alias to /src
import GymForm from '@/components/GymForm'
import { addDocument } from '@/firebase'

export default {
  name: 'CrearGimnasio',
  components: {
    GymForm
  },
  data () {
    return {
      gym: {}
    }
  },
  methods: {
    save (gym) {
      addDocument('gyms', gym)
      this.$router.push({ name: 'gimnasios' })
    }
  }
}
</script>
