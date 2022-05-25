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
      <select name="objectives" v-model="newAppointment.gym" class="appointmentField">
          <option value="power gym">Power gym</option>
          <option value="max gym">Max gym</option>
      </select>
    </div>
    <div class="col-md-4">
      <label>Socio:</label>
      <select name="campaigns" v-model="newAppointment.client" class="appointmentField">
        <option selected>Seleccione una campañas</option>
        <option value="75">Forma tu cuerpo - 35%</option>
        <option value="80">Energiza el corazón - 20%</option>
        <option value="60">Únete a la familia - 40%</option>
      </select>
    </div>
    <div class="col-md-4">
      <label>Fecha</label><br>
      <input v-model="newAppointment.date" type="date" class="appointmentField">
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
      <button type="submit" id="timeButton" class="yellow">6:00 - 7:00</button>
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
      <button type="submit" id="timeButton" class="yellow">7:00 - 8:00</button>
    </div>
    <div class="col-md-4">
      <button type="submit" id="timeButton" class="gray">12:00 - 13:00</button>
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
      <button type="submit" id="timeButton" class="gray">18:00 - 19:00</button>
    </div>
  </div>

  <div class="row align-items-start appointmentsFrame">
    <div class="col-md-4">
      <button type="submit" id="timeButton" class="red">9:00 - 10:00</button>
    </div>
    <div class="col-md-4">
      <button type="submit" id="timeButton" class="yellow">14:00 - 15:00</button>
    </div>
    <div class="col-md-4">
      <button type="submit" id="timeButton" class="gray">19:00 - 20:00</button>
    </div>
  </div>

  <div class="row align-items-start appointmentsFrame">
    <div class="col-md-4">
      <button type="submit" id="timeButton" class="gray">10:00 - 11:00</button>
    </div>
    <div class="col-md-4">
      <button type="submit" id="timeButton" class="yellow">15:00 - 16:00</button>
    </div>
    <div class="col-md-4">
      <button type="submit" id="timeButton" class="gray">20:00 - 21:00</button>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      newAppointment: { ...this.appointment }
    }
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
.box {
  border-radius: 7px;
  float: left;
  height: 30px;
  width: 30px;
  margin-bottom: 15px;
  clear: both;
}

appointmentsFrame{
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
</style>
