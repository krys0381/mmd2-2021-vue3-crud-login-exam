<template>
  <div class="card mt-4">
    <table class="table m-0">
      <thead>
        <tr>
          <th scope="col">Quote</th>
          <th scope="col">Author</th>
          <th scope="col">Company</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ id, quote, author, company } in testimonials" :key="id">
          <td>{{ quote }}</td>
          <td>{{ author }}</td>
          <td>{{ company }}</td>
          <td>
            <!-- manually type action buttons -->
            <!-- :to will redirect the user to the edit URL with the id set to the project we are iterating -->
            <router-link :to="`/editTestimonials/${id}`">
              <button class="btn btn-primary btn-sm me-2">
                Edit
              </button>
            </router-link>
            <!-- use deleteProject and pass the id -->
            <button class="btn btn-danger btn-sm" @click="deleteTestimonial(id)">
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
import { useLoadTestimonials, deleteTestimonial  } from '../../../firebase.js'

  export default {
    setup() {
      const testimonials = useLoadTestimonials()

      return { testimonials, deleteTestimonial }
    } 
  }
</script>

<style lang="scss" scoped>

</style>