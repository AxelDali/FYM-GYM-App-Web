<template>
  <br>
  <br>
  <div class="row align-items-start">
    <div class="col-md-6">
      <router-link :to="{name: 'objetivos'}"><img src="../assets/back.png" id="imageBack"></router-link>
      <h1 style="font-size:32px">Registrar un <span class="styleTitle"> Objetivo</span></h1>
    </div>
    <div class="col-md-3">
    </div>
    <div class="col-md-3">
      <button type="submit" id="buttonSubmit">Registrar objetivo</button>
    </div>
  </div>
  <div class="row align-items-start">
    <div class="col">
      <label>Nombre *:</label><br>
      <input v-model="newGym.name" type="text">
    </div>
    <div class="col">
      <label>Descripcion *</label><br>
      <input v-model="newGym.phone" type="number" style="height:30px" >
    </div>
    <div class="col">
    </div>
    <div class="col">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newObjetive: { ...this.objetive }
    }
  },
  props: {
    objetive: {
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
