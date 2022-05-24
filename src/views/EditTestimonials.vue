<template>
  <div class="card card-body mt-4">
    <h3>Edit Testimonials</h3>
    <form @submit.prevent="update">
      
      <div class="form-group">
        <label>Quote</label>
        <input 
          type="text"
          class="form-control"
          v-model="form.quote"
          required
        />
      </div>
      
      <div class="form-group mt-3">
        <label>Author</label>
        <input 
          type="text" 
          v-model="form.author" 
          class="form-control" 
          required 
        />
      </div>

      <div class="form-group mt-3">
        <label>Company</label>
        <input 
          type="text"
          class="form-control"
          v-model="form.company"
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
import { getTestimonial, updateTestimonial } from '@/firebase.js'

export default {
  setup() {

    const router = useRouter()
    // grab the user ID from the URL by calling the useRoute hook + using the computed 
    // to store the route.param.id
    const route = useRoute()
    // Sometimes we need state that depends on other state - in Vue this is 
    // handled with component computed properties.
    const testimonialId = computed(() => route.params.id)

    const form = reactive({
        quote: '',
        author: '',
        company: ''
    })
    // show information about the current(click) project in the edit form
    // add an onMounted life-hook that will get the user, based on router id 
    // pull the project from firebase and then assign the values to the fields
    onMounted(async () => {
      const testimonial = await getTestimonial(testimonialId.value)
      form.quote = testimonial.quote
      form.author = testimonial.author
      form.company = testimonial.company
    })

    const update = async () => {
      // once user clicks submit, redirect them to home page or '/'
      await updateTestimonial(testimonialId.value, {...form})
      router.push('/admin')
      // after create - empty input field
      form.quote = ''
      form.author = ''
      form.company = ''
    }

    return { form, update }
  }
}
</script>

<style lang="scss" scoped>

</style>