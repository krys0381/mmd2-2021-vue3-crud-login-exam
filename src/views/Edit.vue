<template>
  <div class="card card-body mt-4">
    <h3>Edit users</h3>
    <form @submit.prevent="update">
      
      <div class="form-group">
        <label>Date</label>
        <input 
          type="text"
          class="form-control"
          v-model="form.date"
          required
        />
      </div>
      
      <div class="form-group mt-3">
        <label>Name</label>
        <input 
          type="text" 
          v-model="form.name" 
          class="form-control" 
          required 
        />
      </div>

      <div class="form-group mt-3">
        <label>Description</label>
        <input 
          type="text"
          class="form-control"
          v-model="form.description"
          required
        />
      </div>

      <div class="form-group mt-3">
        <label>Location</label>
        <input 
          type="text"
          class="form-control"
          v-model="form.location"
          required
        />
      </div>

      <div class="form-group mt-3">
        <label>Time</label>
        <input 
          type="text"
          class="form-control"
          v-model="form.time"
          required
        />
      </div>

      <button type="submit" class="btn btn-primary  mt-3">
        Update
      </button>
    </form>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getEvent, updateEvent } from '@/firebase.js'

export default {
  setup() {

    const router = useRouter()
    // grab the user ID from the URL by calling the useRoute hook + using the computed 
    // to store the route.param.id
    const route = useRoute()
    // Sometimes we need state that depends on other state - in Vue this is 
    // handled with component computed properties.
    const eventId = computed(() => route.params.id)

    const form = reactive({
      date: '',
      name: '',
      description: '',
      location: '',
      time: ''
    })
    // show information about the current(click) project in the edit form
    // add an onMounted life-hook that will get the user, based on router id 
    // pull the project from firebase and then assign the values to the fields
    onMounted(async () => {
      const event = await getEvent(eventId.value)
      form.date = event.date
      form.name = event.name
      form.description = event.description
      form.location = event.location
      form.time = event.time
    })

    const update = async () => {
      // once user clicks submit, redirect them to home page or '/'
      await updateEvent(eventId.value, {...form})
      router.push('/admin')
      // after create - empty input field
      form.date = ''
      form.name = ''
      form.description = ''
      form.location = ''
      form.time = ''
    }

    return { form, update }
  }
}
</script>

<style lang="scss" scoped>

</style>