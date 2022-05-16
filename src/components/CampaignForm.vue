<template>
  <br>
  <br>
  <div class="row align-items-start">
    <div class="col-md-6">
      <router-link :to="{name: 'camps'}"><img src="../assets/back.png" id="back-md-6"></router-link>
      <h1 style="font-size:32px">Registrar una <span class="styleTitle"> Campaña</span></h1>
    </div>
    <div class="col-md-3">
      <button type="submit" id="buttonSaveDraft">Guardar como borrador</button>
    </div>
    <div class="col-md-3">
      <button type="submit" id="buttonSubmit">Registrar membresía</button>
    </div>
  </div>

  <div class="row align-items-start">
    <div class="col">
      <label>Título *:</label><br>
      <input v-model="newCampaign.title" type="text">
    </div>
    <div class="col">
      <label>Descripción *:</label><br>
      <textarea v-model="newCampaign.description"></textarea>
    </div>
    <div class="col">
      <label>Fecha de publicación *</label><br>
      <input v-model="newCampaign.publicationDate" type="date">
    </div>
    <div class="col">
      <label>Fecha de caducidad *</label><br>
      <input v-model="newCampaign.expirationDate" type="date">
    </div>
  </div>

  <div class="row align-items-start">
    <div class="col">
      <label>Tipo de descuento *</label><br>
      <select name="discountType" v-model="newCampaign.discountType">
        <option value="percentage">Porcentaje de la mensualidad</option>
        <option value="amount">Cantidad fija</option>
      </select>
    </div>
    <div v-if="newCampaign.discountType === 'percentage'" class="col" >
      <label>Porcentaje de descuento *</label><br>
      <input v-model="newCampaign.discount" type="number" min="0" max="100">
    </div>
    <div v-if="newCampaign.discountType === 'amount'" class="col" >
      <label>Cantidad de descuento *</label><br>
      <input v-model="newCampaign.discount" type="number" min="0" max="100">
    </div>
    <div class="col">
      <label>Tipo de cliente al que aplica *</label><br>
      <select name="clientType" v-model="newCampaign.clientType">
        <option value="newAccount">Nuevas cuentas</option>
        <option value="loyalty">Lealtad</option>
        <option value="gender">Género</option>
      </select>
    </div>
    <div v-if="newCampaign.clientType === 'loyalty'" class="col" >
      <label>Lealtad a la que aplica *</label><br>
      <input v-model="newCampaign.loyalty" type="number" min="0" >
    </div>
    <div v-if="newCampaign.clientType === 'gender'" class="col" >
      <label>Género al que aplica *</label><br>
      <select name="genders" v-model="newCampaign.gender">
        <option value="female">Femenino</option>
        <option value="male">Masculino</option>
      </select>
    </div>
    <div v-if="newCampaign.clientType === 'newAccount'" class="col">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newCampaign: { ...this.campaign }
    }
  },
  mounted () {
    this.newCampaign.discountType = 'percentage'
    this.newCampaign.clientType = 'newAccount'
  },
  props: {
    campaign: {
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
