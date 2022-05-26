<template>
  <br>
  <br>

  <div class="row align-items-start appointmentsFrame">
    <div class="col-md-4">
      <h1 style="font-size:32px">Registro de una <span class="styleTitle"> Cita</span></h1>
    </div>
    <div class="col-md-4">
    </div>
    <div class="col-md-2">
      <label>Apartada:</label><br>
      <div class='box yellow'></div>
    </div>
    <div class="col-md-2">
      <label>Ocupada:</label><br>
      <div class='box red'></div>
    </div>
  </div>

  <div class="row align-items-start appointmentsFrame">
    <div class="col-md-4">
      <label>Gimnasio</label><br>
      <select name="objectives" class="appointmentField">
        <option v-for="gym in gymsData" :key="gym['name']" value="gym['name']">{{ gym['name'] }}</option>
      </select>
    </div>
    <div class="col-md-4">
      <label>Socio:</label>
      <select name="campaigns" class="appointmentField">
        <option selected>Seleccione un socio</option>
        <option v-for="member in membersData" :key="member['id']" value="member['id']">{{ member['name'] }}  {{ member['lastName'] }}</option>
      </select>
    </div>
    <div class="col-md-4">
      <label>Fecha</label><br>
      <input type="date" class="appointmentField">
    </div>
  </div>

  <div class="row align-items-start appointmentsFrame">
    <div class="col-md-4">
      <label style="font-size:32px">Mañana</label>
    </div>
    <div class="col-md-4">
      <label style="font-size:32px">Tarde</label>
    </div>
    <div class="col-md-4">
      <label style="font-size:32px">Noche</label>
    </div>
  </div>

  <div class="row align-items-start appointmentsFrame">
    <div class="col-md-4">
      <button type="submit" id="timeButton" class="yellow" data-bs-toggle="modal" data-bs-target="#exampleModal">6:00 - 7:00</button>
    </div>
    <div class="col-md-4">
      <button type="submit" id="timeButton" class="red">11:00 - 12:00</button>
    </div>
    <div class="col-md-4">
      <button type="submit" id="timeButton" class="red">16:00 - 17:00</button>
    </div>
  </div>

  <div class="row align-items-start appointmentsFrame">
    <div class="col-md-4">
      <button type="submit" id="timeButton" class="yellow" data-bs-toggle="modal" data-bs-target="#exampleModal">7:00 - 8:00</button>
    </div>
    <div class="col-md-4">
      <button type="submit" id="timeButton" class="gray" data-bs-toggle="modal" data-bs-target="#exampleModal">12:00 - 13:00</button>
    </div>
    <div class="col-md-4">
      <button type="submit" id="timeButton" class="red">17:00 - 18:00</button>
    </div>
  </div>

  <div class="row align-items-start appointmentsFrame">
    <div class="col-md-4">
      <button type="submit" id="timeButton" class="red">8:00 - 9:00</button>
    </div>
    <div class="col-md-4">
      <button type="submit" id="timeButton" class="red">13:00 - 14:00</button>
    </div>
    <div class="col-md-4">
      <button type="submit" id="timeButton" class="gray" data-bs-toggle="modal" data-bs-target="#exampleModal">18:00 - 19:00</button>
    </div>
  </div>

  <div class="row align-items-start appointmentsFrame">
    <div class="col-md-4">
      <button type="submit" id="timeButton" class="red">9:00 - 10:00</button>
    </div>
    <div class="col-md-4">
      <button type="submit" id="timeButton" class="yellow" data-bs-toggle="modal" data-bs-target="#exampleModal">14:00 - 15:00</button>
    </div>
    <div class="col-md-4">
      <button type="submit" id="timeButton" class="gray" data-bs-toggle="modal" data-bs-target="#exampleModal">19:00 - 20:00</button>
    </div>
  </div>

  <div class="row align-items-start appointmentsFrame">
    <div class="col-md-4">
      <button type="submit" id="timeButton" class="gray" data-bs-toggle="modal" data-bs-target="#exampleModal">10:00 - 11:00</button>
    </div>
    <div class="col-md-4">
      <button type="submit" id="timeButton" class="yellow" data-bs-toggle="modal" data-bs-target="#exampleModal">15:00 - 16:00</button>
    </div>
    <div class="col-md-4">
      <button type="submit" id="timeButton" class="gray" data-bs-toggle="modal" data-bs-target="#exampleModal">20:00 - 21:00</button>
    </div>
  </div>

<!-- Button trigger modal -->

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">

      <div class="modal-body">

        <div class="row align-items-start">
            <div class="col">
                <label>Instructor:</label><br>
                <select name="campaigns" class="appointmentField">
                  <option selected>Seleccione un Instructor</option>
                  <option v-for="trainer in trainersData" :key="trainer['id']" value="trainer['id']">{{ trainer['name'] }}  {{ trainer['lastName'] }}</option>
                </select>
            </div>
            <div class="col">
                <label>Recurrencia:</label>
                <select class="appointmentField">
                  <option selected>Nunca </option>
                  <option value="75">Semanal</option>
                  <option value="80">Quincenal</option>
                  <option value="60">Mensual</option>
                </select>
            </div>
            <div class="col">
            </div>
        </div>

        <div class="container parent">
          <div class="row">
            <div class='col text-center'>
              <label>Espalda</label><br>
              <input type="radio" name="imgbackground" id="img1" class="d-none imgbgchk" value="">
              <label for="img1">
              <img src="../assets/espalda.png" alt="Image 1" class="colimg">
              <div class="tick_container">
                <div class="tick"><i class="fa fa-check"></i></div>
              </div>
              </label>
            </div>
            <div class='col text-center'>
              <label>Pierna</label><br>
              <input type="radio" name="imgbackground" id="img2" class="d-none imgbgchk" value="">
              <label for="img2">
              <img src="../assets/pierna.png" alt="Image 1" class="colimg">
              <div class="tick_container">
                <div class="tick"><i class="fa fa-check"></i></div>
              </div>
              </label>
            </div>
            <div class='col text-center'>
              <label>Brazo</label><br>
              <input type="radio" name="imgbackground" id="img3" class="d-none imgbgchk" value="">
              <label for="img3">
              <img src="../assets/brazo.png" alt="Image 1" class="colimg">
              <div class="tick_container">
                <div class="tick"><i class="fa fa-check"></i></div>
              </div>
              </label>
            </div>
            <div class='col text-center'>
              <label>Pecho</label><br>
              <input type="radio" name="imgbackground" id="img4" class="d-none imgbgchk" value="">
              <label for="img4">
              <img src="../assets/pecho.png" alt="Image 2" class="colimg">
              <div class="tick_container">
                <div class="tick"><i class="fa fa-check"></i></div>
              </div>
              </label>
            </div>
            <div class='col text-center'>
              <label>Hombro</label><br>
              <input type="radio" name="imgbackground" id="img5" class="d-none imgbgchk" value="">
              <label for="img5">
              <img src="../assets/hombro.png" alt="Image 3" class="colimg">
              <div class="tick_container">
                <div class="tick"><i class="fa fa-check"></i></div>
              </div>
              </label>
            </div>
            <div class='col text-center'>
              <label>Cardio</label><br>
              <input type="radio" name="imgbackground" id="img6" class="d-none imgbgchk" value="">
              <label for="img6">
              <img src="../assets/cardio.png" alt="Image 4" class="colimg">
              <div class="tick_container">
                <div class="tick"><i class="fa fa-check"></i></div>
              </div>
              </label>
            </div>
          </div>
        </div>
        <button id="buttonSubmit" data-bs-dismiss="modal">Registrar Cita</button>
        <button id="buttonCancel" data-bs-dismiss="modal">Cancelar Cita</button>
      </div>
    </div>
  </div>
</div>
<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">

</template>

<script>
import { getCollection } from '@/firebase'
export default {
  data () {
    return {
      newAppointment: { ...this.appointment },
      gymsData: null,
      usersData: null,
      membersData: null,
      trainersData: null
    }
  },
  async created () {
    this.gymsData = await getCollection('gyms')
    this.usersData = await getCollection('users')
    this.trainersData = this.usersData.filter(user => user.type === 'instructor')
    this.membersData = this.usersData.filter(user => user.type === 'socio')
  },
  props: {
    appointment: {
      required: true,
      type: Object
    }
  }
}
</script>

<style>

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

.box {
  border-radius: 7px;
  float: left;
  height: 30px;
  width: 30px;
  margin-bottom: 15px;
  clear: both;
}

@media (min-width: 768px) {
  .modal-xl {
    width: 90%;
   max-width:1320px;
  }
}

.appointmentsFrame{
  margin-left: 250px;
  margin-right: 250px;
}

.red {
  background-color: #D5291B;
}

.yellow {
  background-color: #F29F05;
}

.gray {
  background-color: #2E2E2E;
}

#timeButton{
    text-align: center;
    font-family: 'Poppins';
    font-size: 20px;
    color: white;
    width: 350px;
    height: 85px;
    border-radius: 8px;
    border: solid;
    font-weight: 600;
}

.appointmentField{
  width: 350px;
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

html,body{
    min-height: 100vh;
    min-width: 100vw;
}
.parent{
    height: 20vh;
}
.parent>.row{
    display: flex;
    align-items: center;
    height: 100%;
}
.colimg{
    height:100px;
    width: 100%;
    cursor: pointer;
    transition: transform 1s;
    object-fit: cover;
}
.col label{
    overflow: hidden;
    position: relative;
}
.imgbgchk:checked + label>.tick_container{
    opacity: 1;
}
/*         aNIMATION */
.imgbgchk:checked + label>img{
    transform: scale(1.25);
    opacity: 0.3;
}
.tick_container {
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    cursor: pointer;
    text-align: center;
}
.tick {
    background-color: #F29F05;
    color: white;
    font-size: 16px;
    padding: 9px 12px;
    height: 40px;
    width: 40px;
    border-radius: 100%;
}

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

#buttonCancel{
    background-color: #D5291B;
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
</style>
