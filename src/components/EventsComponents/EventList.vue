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
          <td>
            <!-- manually type action buttons -->
            <!-- :to will redirect the user to the edit URL with the id set to the project we are iterating -->
            <router-link :to="`/edit/${id}`">
              <button class="btn btn-primary btn-sm me-2">
                Edit
              </button>
            </router-link>
            <!-- use deleteProject and pass the id -->
            <button class="btn btn-danger btn-sm" @click="deleteEvent(id)">
              Delete
            </button>
             <!--  -->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// useload hook + delete import 
import { useLoadEvents, deleteEvent  } from '../../firebase.js'

  export default {
    setup() {
      const events = useLoadEvents()

      return { events, deleteEvent }
    } 
  }
</script>

<style lang="scss" scoped>

</style>