<template>
<table id="tableComponent" class="table table-bordered">
  <tbody>
      <tr id="col">
      <!-- loop through each value of the fields to get the table header -->
      <th v-for="field in fieldsNames" :key='field' @click="sortTable(field)" >
        {{field}} <i class="bi bi-sort-alpha-down" aria-label='Sort Icon'></i>
      </th>
      <th></th>
      <th></th>
    </tr>
      <!-- Loop through the list get the each student data -->
      <tr id="col" v-for="item in campaignsData" :key='item'>
      <td id="fil" v-for="field in fields" :key='field'>{{item[field]}}</td>
      <td id="fil"><router-link id="link" :to="{name: 'camp', params: {id: item['id']}}">Editar registro</router-link></td>
      <td id="fil"><button id="link" v-on:click="$emit('delete', item['id'])">Eliminar registro</button></td>
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
    },
    fieldsNames: {
      type: Array
    }
  }
}
</script>

<style scoped>
  button {
    background: none;
    border: none;
    padding: 0;
    text-decoration: underline;
    cursor: pointer;
    font-weight: bold;
  }
</style>
