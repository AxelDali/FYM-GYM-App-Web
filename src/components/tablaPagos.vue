<template>
<div class="row">
    <div class="col md-6">
      <h1 style="font-size:28px">Pagos proximos a vencer</h1>
    </div>
    <div class="col md-6">
      <h1 style="font-size:28px">Pagos vencidos</h1>
    </div>
  </div>
<div class="row align-items-start ">
    <div class="col-md-6">
      <table id="tableComponent" class="table table-bordered">
      <tbody>
        <tr id="col">
        <!-- loop through each value of the fields to get the table header -->
        <th v-for="field in fields" :key='field' @click="sortTable(field)" >
          {{field}} <i class="bi bi-sort-alpha-down" aria-label='Sort Icon'></i>
        </th>
        <th></th>
        </tr>
        <!-- Loop through the list get the each student data -->
        <tr id="col" v-for="item in pagosPData" :key='item'>
        <td id="fil" v-for="field in fields" :key='field'>{{item[field]}}</td>
        <td id="fil"><a id="link" href="">Registar pago</a></td>
        </tr>
      </tbody>
      </table>
    </div>
    <div class="col-md-6">
      <table id="tableComponent" class="table table-bordered">
      <tbody>
        <tr id="col">
        <!-- loop through each value of the fields to get the table header -->
        <th v-for="field in fields" :key='field' @click="sortTable(field)" >
          {{field}} <i class="bi bi-sort-alpha-down" aria-label='Sort Icon'></i>
        </th>
        <th></th>
        </tr>
        <!-- Loop through the list get the each student data -->
        <tr id="col" v-for="item in pagosVData" :key='item'>
        <td id="fil" v-for="field in fields" :key='field'>{{item[field]}}</td>
        <td id="fil"><a id="link" href="">Registar pago</a></td>
        </tr>
      </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TableComponent',
  props: {
    pagosVData: {
      type: Array
    },
    pagosPData: {
      type: Array
    },
    fields: {
      type: Array
    }
  }
}
</script>
