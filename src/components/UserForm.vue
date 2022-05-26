<template>
    <br>
    <br>
    <form v-on:submit='save'>
        <div class="row align-items-start">
        <div class="col-md-6">
            <router-link to="/usuarios"><img src="../assets/back.png" id="imageBack"></router-link>
            <h1 v-if="!edit" style="font-size:32px">Registrar un <span class="styleTitle"> Usuario</span></h1>
            <h1 v-else style="font-size:32px">Modificar un <span class="styleTitle"> Usuario</span></h1>
        </div>
        <div class="col-md-3">
        </div>
        <div class="col-md-3">
            <button type="submit" id="buttonSubmit">Registrar usuario</button>
        </div>
        </div>

        <div class="row align-items-start align-items-center">
            <div class="col">
                <label>Tipo de usuario *</label><br>
                <select name="campaigns" v-model="newUser.type" required>
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
                    <input v-model="newUser.name" type="text" required>
                </div>
                <div class="col">
                    <label>Apellido Paterno *</label><br>
                    <input v-model="newUser.lastName" type="text" required>
                </div>
                <div class="col">
                    <label>Apellido Materno</label><br>
                    <input v-model="newUser.lastName2" type="text">
                </div>
                <div class="col">
                    <label>Teléfono *</label><br>
                    <input v-model="newUser.phone" type="number" required>
                </div>
            </div>

            <div class="row align-items-start">
                <div class="col">
                    <label>Email *:</label><br>
                    <input v-model="newUser.email" type="email" required>
                </div>
                <div class="col">
                    <label>Fecha de nacimiento *</label><br>
                    <input v-model="newUser.birthDate" type="date" required>
                </div>
                <div class="col">
                    <label>Fecha de corte *</label><br>
                    <input v-model="newUser.cutDate" type="date" required>
                </div>
                <div class="col">
                    <label>Fecha de entrada *</label><br>
                    <input v-model="newUser.enterDate" type="date" required>
                </div>
            </div>

            <div class="row align-items-start">
                <div class="col">
                    <label>Minutos de antelación *:</label><br>
                    <input v-model="newUser.notificationTimeWindow" type="number" required>
                </div>
                <div class="col">
                    <label>Genero *</label><br>
                    <select name="genders" v-model="newUser.gender" required>
                        <option value="female">Femenino</option>
                        <option value="male">Masculino</option>
                    </select>
                </div>
                <div class="col">
                    <label>Membresía *</label><br>
                    <select name="membership" v-model="newUser.membership" required>
                      <option v-for="membership in membershipsData" :key="membership['name']" value="membership">{{ membership['name'] }}</option>
                    </select>
                </div>
                <div class="col">
                    <label>Objetivos *</label><br>
                    <select name="objectives" v-model="newUser.objectives" required>
                        <option v-for="objective in objectivesData" :key="objective['name']" value="objective['name']">{{ objective['name'] }}</option>
                    </select>
                </div>
            </div>
        </div>

        <!-- Form del Recepcionista -->
        <div v-if="newUser.type === 'recepcionista'">
            <div class="row align-items-start">
                <div class="col">
                    <label>Nombre *:</label><br>
                    <input v-model="newUser.name" type="text" required>
                </div>
                <div class="col">
                    <label>Apellido Paterno *</label><br>
                    <input v-model="newUser.lastName" type="text" required>
                </div>
                <div class="col">
                    <label>Apellido Materno</label><br>
                    <input v-model="newUser.lastName2" type="text">
                </div>
                <div class="col">
                    <label>Teléfono *</label><br>
                    <input v-model="newUser.phone" type="number" required>
                </div>
            </div>

            <div class="row align-items-start">
                <div class="col">
                    <label>Email *:</label><br>
                    <input v-model="newUser.email" type="email" required>
                </div>
                <div class="col">
                </div>
                <div class="col">
                </div>
                <div class="col">
                </div>
            </div>
        </div>

        <!-- Form del instructor -->
        <div v-if="newUser.type === 'instructor'">
            <div class="row align-items-start">
                <div class="col">
                    <label>Nombre *:</label><br>
                    <input v-model="newUser.name" type="text" required>
                </div>
                <div class="col">
                    <label>Apellido Paterno *</label><br>
                    <input v-model="newUser.lastName" type="text" required>
                </div>
                <div class="col">
                    <label>Apellido Materno</label><br>
                    <input v-model="newUser.lastName2" type="text">
                </div>
                <div class="col">
                    <label>Teléfono *</label><br>
                    <input v-model="newUser.phone" type="number" required>
                </div>
            </div>

            <div class="row align-items-start">
                <div class="col">
                    <label>Email *:</label><br>
                    <input v-model="newUser.email" type="email" required>
                </div>
                <div class="col">
                    <label>Fecha de certificación *</label><br>
                    <input v-model="newUser.certificationDate" type="date" required>
                </div>
                <div class="col">
                    <label>Referencia de certificación:</label><br>
                    <input class="form-control" type="file" id="formFile">
                </div>
                <div class="col">
                    <label>Objetivos *</label><br>
                    <select name="objectives" v-model="newUser.objectives" required>
                        <option v-for="objective in objectivesData" :key="objective['name']" value="objective['name']">{{ objective['name'] }}</option>
                    </select>
                </div>
            </div>

            <div class="row align-items-start">
                <div class="col">
                    <label>Inicio de jornada *</label><br>
                    <select name="objectives" v-model="newUser.workShiftStart" required>
                        <option value="12:00">12:00</option>
                        <option value="13:00">13:00</option>
                    </select>
                </div>
                <div class="col">
                    <label>Final de jornada *</label><br>
                    <select name="objectives" v-model="newUser.workShiftEnd" required>
                        <option value="12:00">12:00</option>
                        <option value="13:00">13:00</option>
                    </select>
                </div>
                <div class="col">
                    <label>Dias en los que labora *</label><br>
                    <select name="objectives" v-model="newUser.workdays" required>
                        <option value="sabado">Sabado</option>
                        <option value="domingo">Domingo</option>
                        <option value="lunes">Lunes</option>
                        <option value="martes">Martes</option>
                        <option value="miercoles">Miercoles</option>
                        <option value="jueves">Jueves</option>
                        <option value="viernes">Viernes</option>
                    </select>
                </div>
                <div class="col">
                    <label>Gimnasio *</label><br>
                    <select name="gym" v-model="newUser.gym" required>
                      <option v-for="gym in gymsData" :key="gym['name']" value="gym['name']">{{ gym['name'] }}</option>
                    </select>
                </div>
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
                <input v-model="newUser.country" type="text" required>
            </div>
            <div class="col">
                <label>Estado *:</label><br>
                <input v-model="newUser.state" type="text" required>
            </div>
            <div class="col">
                <label>Ciudad *:</label><br>
                <input v-model="newUser.city" type="text" required>
            </div>
            <div class="col">
                <label>Calle *:</label><br>
                <input v-model="newUser.street" type="text" required>
            </div>
        </div>

        <div class="row align-items-start">
            <div class="col">
                <label>Numero Exterior *:</label><br>
                <input v-model="newUser.exteriorNumber" type="number" required>
            </div>
            <div class="col">
                <label>Colonia *:</label><br>
                <input v-model="newUser.colony" type="text" required>
            </div>
            <div class="col">
                <label>Código Postal *:</label><br>
                <input v-model="newUser.zip" type="number" required>
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
    </form>
</template>

<script>
import { getCollection } from '@/firebase'
export default {
  emits: ['save'],
  data () {
    return {
      newUser: { ...this.user },
      gymsData: null,
      objectivesData: null,
      membershipsData: null
    }
  },
  async created () {
    this.gymsData = await getCollection('gyms')
    this.objectivesData = await getCollection('objectives')
    this.membershipsData = await getCollection('memberships')
  },
  methods: {
    save () {
      this.$emit('save', this.newUser)
    }
  },
  props: {
    user: {
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
    width: 4.3%;
    padding-bottom: 20px;
}
</style>
