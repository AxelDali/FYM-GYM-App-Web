<template>
  <br>
  <br>
  <div class="row align-items-start">
    <div class="col-md-6">
      <router-link :to="{name: 'membresias'}"><img src="../assets/back.png" id="back-md-6"></router-link>
      <h1 v-if="!edit" style="font-size:32px">Registrar una <span class="styleTitle"> Membresía</span></h1>
      <h1 v-else style="font-size:32px">Modificar una <span class="styleTitle"> Membresía</span></h1>
    </div>
    <div class="col-md-3">
    </div>
    <div class="col-md-3">
      <button type="submit" id="buttonSubmit" v-on:click="save">Registrar membresía</button>
    </div>
  </div>

  <div class="row align-items-start">
    <div class="col">
      <label>Nombre *:</label><br>
      <input v-model="newMembership.name" type="text" required>
    </div>
    <div class="col">
      <label>Periodo *:</label><br>
      <select name="periods" v-model="newMembership.period" required>
        <option value=1>Mensual</option>
        <option value=3>Trimestral</option>
        <option value=6>Semestral</option>
        <option value=12>Anual</option>
      </select>
    </div>
    <div class="col">
      <label>Porcentaje de descuento *:</label><br>
      <input v-model="newMembership.discount" type="number" min="0" max="100" required>
    </div>
    <div class="col">
    </div>
  </div>
</template>

<script>
export default {
  emits: ['save'],
  data () {
    return {
      newMembership: { ...this.membership }
    }
  },
  methods: {
    save () {
      this.$emit('save', this.newMembership)
    }
  },
  props: {
    membership: {
      required: true,
      type: Object
    },
    edit: {
      type: String
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

#back-md-6 {
    width: 4.3%;
    padding-bottom: 20px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}
</style>
