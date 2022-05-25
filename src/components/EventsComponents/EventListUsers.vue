<template>
  <div class="card mt-4">
    <table class="table m-0">
      <thead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Location</th>
          <th scope="col">Time</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ id, date, name, description, location, time } in events" :key="id">
          <td>{{ date }}</td>
          <td>{{ name }}</td>
          <td>{{ description }}</td>
          <td>{{ location }}</td>
          <td>{{ time }}</td>
        </tr>
      </tbody>
    </table>
   
  </div>
</template>

<script>
// useload hook + delete import 
import { useLoadEvents } from '../../firebase.js'

export default {
  setup() {
    const events = useLoadEvents()

    return { events }
  } 
}
</script>

<style lang="scss" scoped>

</style>