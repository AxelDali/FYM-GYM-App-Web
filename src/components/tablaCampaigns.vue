<template>
<table id="tableComponent" class="table table-bordered">
  <tbody>
      <tr id="col">
      <!-- loop through each value of the fields to get the table header -->
      <th v-for="field in fields" :key='field' @click="sortTable(field)" >
        {{field}} <i class="bi bi-sort-alpha-down" aria-label='Sort Icon'></i>
      </th>
      <th></th>
      <th></th>
    </tr>
      <!-- Loop through the list get the each student data -->
      <tr id="col" v-for="item in campaignsData" :key='item'>
      <td id="fil" v-for="field in fields" :key='field'>{{item[field]}}</td>
      <td id="fil"><a id="link" href="">Editar registro</a></td><td id="fil"><a id="link" href="">Eliminar registro</a></td>
    </tr>
</tbody>
</table>
</template>
<script>
export default {
  name: 'TableComponent',
  props: {
    campaignsData: {
      type: Array
    },
    fields: {
      type: Array
    }
  }
}
</script>
