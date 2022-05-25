<template>
  <br>
  <br>
  <div class="row align-items-start">
    <div class="col-md-6">
      <router-link :to="{name: 'gimnasios'}"><img src="../assets/back.png" id="back-md-6"></router-link>
      <h1 v-if="!edit" style="font-size:32px">Registrar un <span class="styleTitle"> Gimnasio</span></h1>
      <h1 v-else style="font-size:32px">Modificar un <span class="styleTitle"> Gimnasio</span></h1>
    </div>
    <div class="col-md-3">
    </div>
    <div class="col-md-3">
      <button type="submit" id="buttonSubmit"  v-on:click="save">Registrar gimnasio</button>
    </div>
  </div>

  <div class="row align-items-start">
    <div class="col">
      <label>Nombre *:</label><br>
      <input v-model="newGym.name" type="text">
    </div>
    <div class="col">
      <label>Teléfono *</label><br>
      <input v-model="newGym.phone" type="number">
    </div>
    <div class="col">
      <label>Mensualidad *</label><br>
      <input v-model="newGym.cost" type="number" min="0">
    </div>
    <div class="col">
      <label>Aforo *</label><br>
      <input v-model="newGym.capacity" type="number" min="0">
    </div>
  </div>

  <div class="row align-items-start">
    <div class="col">
      <label>Porcentaje de aforo permitido *:</label><br>
      <input v-model="newGym.permittedCapacity" type="number" min="0" max="100">
    </div>
    <div class="col">
    </div>
    <div class="col">
    </div>
    <div class="col">
    </div>
  </div>

  <!-- Dirección -->
  <br>
  <div class="row align-items-start">
    <div class="col">
      <label style="font-size:32px">Dirección</label>
    </div>
  </div>

  <div class="row align-items-start">
    <div class="col">
      <label>País *:</label><br>
      <input v-model="newGym.country" type="text">
    </div>
    <div class="col">
      <label>Estado *:</label><br>
      <input v-model="newGym.state" type="text">
    </div>
    <div class="col">
      <label>Ciudad *:</label><br>
      <input v-model="newGym.city" type="text">
    </div>
    <div class="col">
      <label>Calle *:</label><br>
      <input v-model="newGym.street" type="text">
    </div>
  </div>

  <div class="row align-items-start">
    <div class="col">
      <label>Numero Exterior *:</label><br>
      <input v-model="newGym.exteriorNumber" type="number">
    </div>
    <div class="col">
      <label>Colonia *:</label><br>
      <input v-model="newGym.colony" type="text">
    </div>
    <div class="col">
      <label>Código Postal *:</label><br>
      <input v-model="newGym.zip" type="number">
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
      newGym: { ...this.gym }
    }
  },
  methods: {
    save () {
      this.$emit('save', this.newGym)
    }
  },
  props: {
    gym: {
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
