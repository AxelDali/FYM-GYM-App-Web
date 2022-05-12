<template>
  <form @submit.prevent="">
    <div>
      <label>Nombre:</label>
      <input
        v-model="newMembership.name"
        type="text">
    </div>
    <div>
      <label>Periodo:</label>
      <input
        v-model="newMembership.period"
        type="text">
    </div>
    <div>
      <label>Descuento:</label>
      <input
        v-model="newMembership.discount"
        type="number">
    </div>
    <div>
      <button type="submit">Agregar</button>
    </div>
  </form>
</template>

<script>
export default {
  data () {
    return {
      newMembership: { ...this.membership }
    }
  },
  props: {
    membership: {
      required: true,
      type: Object
    }
  }
}
</script>

<style>

</style>
