<template>
  <div class="card mt-4">
    <table class="table m-0">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Task</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ id, name, task } in projects" :key="id">
          <td>{{ name }}</td>
          <td>{{ task }}</td>
          <td>
            Empty
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// useload hook + delete import 
import { useLoadProjects } from '@/firebase.js'

  export default {
    setup() {
      const projects = useLoadProjects()

      return { projects }
    } 
  }
</script>

<style lang="scss" scoped>

</style>