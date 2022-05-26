<template>
  <br>
  <br>
  <form action="/pagos/lista">
    <div class="row align-items-start">
      <div class="col-md-6">
        <router-link :to="{name: 'pagos'}"><img src="../assets/back.png" id="imageBack"></router-link>
        <h1 style="font-size:32px">Registrar un <span class="styleTitle"> Pago</span></h1>
      </div>
      <div class="col-md-3">
      </div>
      <div class="col-md-3">
        <button type="submit" id="buttonSubmit">Registrar pago</button>
      </div>
    </div>
    <div class="row align-items-start">
      <div class="col">
        <label>Monto a pagar*:</label><br>
        <input
          v-model="newPayment.subtotal"
          type="number" min = "0" required>
      </div>
      <div class="col">
        <label>Campañas a las que aplica:</label><br>
        <select name="campaigns" v-model="newPayment.campaigns" required>
          <option selected>Seleccione una campaña</option>
          <option v-for="campaign in campaignsData" :key="campaign['title']" value="campaign['title']">{{ campaign['title'] }}</option>
        </select>
      </div>
      <div class="col">
        <label>Total a pagar:</label><br>
        <div>
          <label style="font-size:18px">$</label>
        </div>
      </div>
      <div class="col-md-3">
      </div>
    </div>
  </form>
</template>

<script>
import { getCollection } from '@/firebase'
export default {
  data () {
    return {
      newPayment: { ...this.payment },
      campaignsData: null
    }
  },
  async created () {
    this.campaignsData = await getCollection('campaigns')
    this.campaignsData = this.campaignsData.filter(campaign => campaign.published === true)
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
  #buttonSubmit{
    background-color: #F29F05;
    text-align: center;
    font-family: 'Poppins';
    font-size: 14px;
    color: white;
    width: 350px;
    height: 40px;
    border-color: #F29F05;
    border-radius: 8px;
    border: solid;
    font-weight: 600;
  }

  .styleTitle{
      color:#F29F05;
  }

  #flexSwitchCheckDefault{
      background-color: #F29F05;
      text-align: center;
      font-family: 'Poppins';
      font-size: 14px;
      color: white;
      width: 50px;
      height: 30px;
      border-color: #F29F05;
      border-radius: 8px;
      border: solid;
      font-weight: 600;
  }

  #flexSwitchCheckDefault:focus,#flexSwitchCheckDefault:active {
    outline: none !important;
    box-shadow: none;
  }

  .dropdown-menu a{
      color: #000000 !important;
      font-weight: bold;
  }

  input, select, option, #formFile {
      width: 350px;
      height: 30px;
      border-radius: 8px;
      border-width: 1px;
      font-family: 'Poppins';
      color:black;
      font-size: 16px;
      text-align: left;
      font-weight: bold ;
  }

  #back {
      width: 10%;
      padding-bottom: 20px;
  }
</style>
