<template>
  <br>
  <br>
  <div class="row align-items-start">
    <div class="col-md-6">
      <router-link :to="{name: 'maquinas'}"><img src="../assets/back.png" id="back-md-6" style="width: 10%;"></router-link>
      <h1 style="font-size:32px">Registrar un <span class="styleTitle"> Maquina</span></h1>
    </div>
    <div class="col-md-3">
    </div>
    <div class="col-md-3">
      <button type="submit" id="buttonSubmit">Registrar maquina</button>
    </div>
  </div>
  <div class="row align-items-start">
    <div class="col">
      <label>Nombre *:</label><br>
      <input v-model="newMachine.name" type="text">
    </div>
    <div class="col">
      <label>Serial *</label><br>
      <input v-model="newMachine.serial" type="number">
    </div>
    <div class="col">
      <label>Ultima fecha de mantenimiento *</label><br>
      <input v-model="newMachine.finalDate" type="date">
    </div>
    <div class="col">
      <label>Periocidad de mantenimiento(en meses)*</label><br>
      <input v-model="newMachine.period" type="number" min="0">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newMachine: { ...this.machine }
    }
  },
  props: {
    machine: {
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
