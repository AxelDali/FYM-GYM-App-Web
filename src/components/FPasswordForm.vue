<template>
  <br>
  <br>
  <div class="row align-items-start">
    <h1 style="font-size:32px">Olvide mi <span class="styleTitle"> Contraseña</span></h1>
  </div>
  <br>
  <div class="row align-items-start loginFrame">
    <div class="col-md-4">
    </div>
    <div class="col-md-3">
        <label>Usuario *:</label><br>
        <input type="email" required><br>
    </div>
    <div class="col-md-3">
    </div>
  </div>
  <div class="row align-items-start loginFrame">
    <div class="col-md-4">
    </div>
    <div class="col-md-3">
        <label>¿En que ciudad naciste? *:</label><br>
        <input type="text" required><br>
    </div>
    <div class="col-md-3">
    </div>
  </div>
  <div class="row align-items-start loginFrame">
    <div class="col-md-4">
    </div>
    <div class="col-md-3">
        <router-link :to="{name: 'restorePassword'}"><button type="submit" id="buttonSubmit">Aceptar</button></router-link>
        <router-link :to="{name: 'login'}"><a id="link" href="">Ir a inicio de sesión</a></router-link>
    </div>
    <div class="col-md-3">
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      newLogin: { ...this.login }
    }
  },
  props: {
    login: {
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

    #buttonSaveDraft{
        background-color: #8C5F0A;
        text-align: center;
        font-family: 'Poppins';
        font-size: 14px;
        color: white;
        width: 350px;
        height: 40px;
        border-color: #8C5F0A;
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

    textarea {
        width: 350px;
        height: 60px;
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
