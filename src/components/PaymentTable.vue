<template>
<table id="tableComponent" class="table table-bordered">
  <tbody>
      <tr id="col">
      <!-- loop through each value of the fields to get the table header -->
      <th v-for="fieldName in fieldsNames" :key='fieldName' @click="sortTable(fieldName)" >
        {{fieldName}}
        <span v-if="sortField && sortField.fieldName === fieldName && sortField.ascendent">▲</span>
        <span v-if="sortField && sortField.fieldName === fieldName && !sortField.ascendent">▼</span>
      </th>
      <th></th>
    </tr>
      <!-- Loop through the list get the each student data -->
      <tr id="col" v-for="item in sortedData" :key='item'>
      <td id="fil" v-for="field in fields" :key='field'>{{item[field]}}</td>
      <td v-if="name === 'Registrar Pago'" id="fil"><router-link :to="{name: 'registrar_pago'}"><button  id="link">{{name}}</button></router-link></td>
      <td v-if="name === 'Ir al perfil'" id="fil"><button v-on:click="$emit('edit', item['id'])" id="link">{{name}}</button></td>
    </tr>
</tbody>
</table>
</template>
<script>
export default {
  name: 'TableComponent',
  data () {
    return {
      sortField: null
    }
  },
  computed: {
    sortedData () {
      if (!this.sortField) {
        return this.data
      }

      return [...this.data].sort((a, b) => {
        const stringA = a[this.sortField.field].toString()
        const stringB = b[this.sortField.field].toString()
        if (this.sortField.ascendent) {
          return stringA.localeCompare(stringB)
        }
        return stringB.localeCompare(stringA)
      })
    }
  },
  methods: {
    sortTable (fieldName) {
      const index = this.fieldsNames.indexOf(fieldName)
      const field = this.fields[index]
      const ascendent = this.sortField && this.sortField.field === field ? !this.sortField.ascendent : true
      this.sortField = { field, ascendent, fieldName }
    }
  },
  props: {
    data: {
      type: Array
    },
    fields: {
      type: Array
    },
    fieldsNames: {
      type: Array
    },
    name: {
      type: String
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
