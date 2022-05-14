<template>
  <form @submit.prevent="">
    <div class="row align-items-start">
      <div class="col align-items-start">
        <img src="../assets/back.png" id="imageBack">
        <h1 style="font-size:32px">Registrar un <span class="styleTitle"> Pago</span></h1>
      </div>
      <div class="col-auto">
        <button type="submit" id="buttonSubmit">Registrar pago</button>
      </div>
    </div>
    <div class="row align-items-start">
      <div class="col">
        <label>Cliente: </label>
        <label>Gabriel Mar</label>
      </div>
    </div>
    <div class="row align-items-start">
      <div class="col">
        <label>Monto a pagar*:</label>
        <input
          v-model="newPayment.subtotal"
          type="number">
      </div>
      <div class="col">
        <label>Campañas a las que aplica:</label>
        <select name="campaigns" v-model="newPayment.campaigns">
          <option selected>Seleccione una campañas</option>
        </select>
      </div>
      <div class="col">
        <label>Total a pagar:</label>
        <div>
          <label style="font-size:18px">$</label>
        </div>
      </div>
      <div class="col">
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data () {
    return {
      newPayment: { ...this.payment }
    }
  },
  props: {
    payment: {
      required: true,
      type: Object
    }
  }
}
</script>

<style>

</style>
