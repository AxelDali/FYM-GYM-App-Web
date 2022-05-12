<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div>
          <label>Name</label>
          <input v-model="name" required>
      </div>

      <div>
          <label>Date</label>
          <input v-model="date" required>
      </div>

      <button type="submit">
          Create Employee
      </button>
    </form>
  </div>
</template>

<script>

import { addEmployee } from '@/firebase'

export default {
  name: 'addEmployee',
  data () {
    return {
      name: '',
      date: ''
    }
  },
  methods: {
    onSubmit (e) {
      e.preventDefault()
      addEmployee(this.name, this.date)
      this.name = ''
      this.date = ''
    }
  }
}
</script>
