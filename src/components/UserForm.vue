<template>
    <br>
    <br>
    <div class="row align-items-start">
      <div class="col">
        <router-link to="/usuarios"><img src="../assets/back.png" id="back"></router-link>
        <h1 style="font-size:32px">Registrar un <span class="styleTitle"> Usuario</span></h1>
      </div>
      <div class="col">
      </div>
      <div class="col">
      </div>
      <div class="col">
          <button type="submit" id="buttonSubmit">Registrar pago</button>
      </div>
    </div>

    <div class="row align-items-start align-items-center">
        <div class="col">
            <label>Tipo de usuario *</label><br>
            <select name="campaigns" v-model="newUser.type">
                <option selected="selected" value="socio">Socio</option>
                <option value="instructor">Instructor</option>
                <option value="recepcionista">Recepcionista</option>
            </select>
        </div>
        <div class="col text-center">
            <img src="../assets/profile.png" alt="" width="150" class="rounded-image">
        </div>
        <div class="col">
            <label>Usuario Activo *</label>
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" v-model="newUser.isActive"/>
            </div>
        </div>
        <div class="col">
        </div>
    </div>

    <!-- Form del socio -->
    <div v-if="newUser.type === 'socio'">
        <div class="row align-items-start">
            <div class="col">
                <label>Nombre *:</label><br>
                <input v-model="newUser.name" type="text">
            </div>
            <div class="col">
                <label>Apellido Paterno *</label><br>
                <input v-model="newUser.lastname" type="text">
            </div>
            <div class="col">
                <label>Apellido Materno</label><br>
                <input v-model="newUser.lastname2" type="text">
            </div>
            <div class="col">
                <label>Telefono *</label><br>
                <input v-model="newUser.phone" type="number">
            </div>
        </div>

        <div class="row align-items-start">
            <div class="col">
                <label>Email *:</label><br>
                <input v-model="newUser.email" type="email">
            </div>
            <div class="col">
                <label>Fecha de nacimiento *</label><br>
                <input v-model="newUser.birthdate" type="date">
            </div>
            <div class="col">
                <label>Fecha de corte *</label><br>
                <input v-model="newUser.cutDate" type="date">
            </div>
            <div class="col">
                <label>Fecha de entrada *</label><br>
                <input v-model="newUser.enterDate" type="date">
            </div>
        </div>

        <div class="row align-items-start">
            <div class="col">
                <label>Minutos de antelacion *:</label><br>
                <input v-model="newUser.notifTimeWindow" type="number">
            </div>
            <div class="col">
                <label>Genero *</label><br>
                <select name="genders" v-model="newUser.gender">
                    <option value="female">Femenino</option>
                    <option value="male">Masculino</option>
                </select>
            </div>
            <div class="col">
                <label>Membresia *</label><br>
                <select name="membership" v-model="newUser.memership">
                    <option value="pro">Pro</option>
                    <option value="normal">Normal</option>
                </select>
            </div>
            <div class="col">
                <label>Objetivos *</label><br>
                <select name="objectives" v-model="newUser.objectives">
                    <option value="strenght">Fuerza</option>
                    <option value="atheliticism">Atreticidad</option>
                </select>
            </div>
        </div>
    </div>

    <!-- Form del Recepcionista -->
    <div v-if="newUser.type === 'recepcionista'">
        <div class="row align-items-start">
            <div class="col">
                <label>Nombre *:</label><br>
                <input v-model="newUser.name" type="text">
            </div>
            <div class="col">
                <label>Apellido Paterno *</label><br>
                <input v-model="newUser.lastname" type="text">
            </div>
            <div class="col">
                <label>Apellido Materno</label><br>
                <input v-model="newUser.lastname2" type="text">
            </div>
            <div class="col">
                <label>Telefono *</label><br>
                <input v-model="newUser.phone" type="number">
            </div>
        </div>

        <div class="row align-items-start">
            <div class="col">
                <label>Email *:</label><br>
                <input v-model="newUser.email" type="email">
            </div>
            <div class="col">
                <label>Genero *</label><br>
                <select name="genders" v-model="newUser.gender">
                    <option value="female">Femenino</option>
                    <option value="male">Masculino</option>
                </select>
            </div>
            <div class="col">
                <label>Membresia *</label><br>
                <select name="membership" v-model="newUser.memership">
                    <option value="pro">Pro</option>
                    <option value="normal">Normal</option>
                </select>
            </div>
            <div class="col">
                <label>Fecha de entrada *</label><br>
                <input v-model="newUser.enterDate" type="date">
            </div>
        </div>
    </div>

    <!-- Form del instructor -->
    <div v-if="newUser.type === 'instructor'">
        <div class="row align-items-start">
            <div class="col">
                <label>Nombre *:</label><br>
                <input v-model="newUser.name" type="text">
            </div>
            <div class="col">
                <label>Apellido Paterno *</label><br>
                <input v-model="newUser.lastname" type="text">
            </div>
            <div class="col">
                <label>Apellido Materno</label><br>
                <input v-model="newUser.lastname2" type="text">
            </div>
            <div class="col">
                <label>Telefono *</label><br>
                <input v-model="newUser.phone" type="number">
            </div>
        </div>

        <div class="row align-items-start">
            <div class="col">
                <label>Email *:</label><br>
                <input v-model="newUser.email" type="email">
            </div>
            <div class="col">
                <label>Fecha de certificacion *</label><br>
                <input v-model="newUser.certificationDate" type="date">
            </div>
            <div class="col">
                <label>Referencia de certificacion *:</label><br>
                <input class="form-control" type="file" id="formFile" >
            </div>
            <div class="col">
                <label>Objetivos *</label><br>
                <select name="objectives" v-model="newUser.objectives">
                    <option value="strenght">Fuerza</option>
                    <option value="atheliticism">Atreticidad</option>
                </select>
            </div>
        </div>

        <div class="row align-items-start">
            <div class="col">
                <label>Inicio de jornada *</label><br>
                <select name="objectives" v-model="newUser.workshiftStart">
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                </select>
            </div>
            <div class="col">
                <label>Final de jornada *</label><br>
                <select name="objectives" v-model="newUser.workshiftEnd">
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                </select>
            </div>
            <div class="col">
                <label>Dias en los que labora *</label><br>
                <select name="objectives" v-model="newUser.workdays">
                    <option value="jueves">Jueves</option>
                    <option value="viernes">Viernes</option>
                </select>
            </div>
            <div class="col">
                <label>Gimnasio *</label><br>
                <select name="objectives" v-model="newUser.workdays">
                    <option value="power gym">Power gym</option>
                    <option value="max gym">Max gym</option>
                </select>
            </div>
        </div>
    </div>

    <!-- Direccion -->
    <br>
    <div class="row align-items-start">
        <div class="col">
            <label style="font-size:32px">Direccion</label>
        </div>
    </div>

    <div class="row align-items-start">
        <div class="col">
            <label>Pais *:</label><br>
            <input v-model="newUser.country" type="text">
        </div>
        <div class="col">
            <label>Estado *:</label><br>
            <input v-model="newUser.state" type="text">
        </div>
        <div class="col">
            <label>Ciudad *:</label><br>
            <input v-model="newUser.city" type="text">
        </div>
        <div class="col">
            <label>Calle *:</label><br>
            <input v-model="newUser.street" type="text">
        </div>
    </div>

    <div class="row align-items-start">
        <div class="col">
            <label>Numero Exterior *:</label><br>
            <input v-model="newUser.exteriornumber" type="number">
        </div>
        <div class="col">
            <label>Colonia *:</label><br>
            <input v-model="newUser.colony" type="text">
        </div>
        <div class="col">
            <label>Codigo Postal *:</label><br>
            <input v-model="newUser.zip" type="number">
        </div>
        <div class="col">
        </div>
    </div>

    <!-- Blank row template -->
    <div class="row align-items-start">
        <div class="col">
        </div>
        <div class="col">
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
      newUser: { ...this.user }
    }
  },
  mounted () {
    this.newUser.type = 'socio'
  },
  props: {
    user: {
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
