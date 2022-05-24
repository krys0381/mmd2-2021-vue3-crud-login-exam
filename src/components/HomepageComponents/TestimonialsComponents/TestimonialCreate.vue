<template>
  <div class="card card-body mt-4">
    <!-- using @submit as a click function - add prevent to stop from refreshing page -->
    <form @submit.prevent="onSubmit">
          
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

      <button type="submit" class="btn btn-success mt-3">
        Create Testimonial
      </button>
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { createTestimonial } from '../../../firebase.js'

  export default {
   setup() {
     const form = reactive({
       quote: '',
       author: '',
       company: ''
     })

     const onSubmit = async () => {
       // spread operator to add field + invoking our createProject function from firebase.js
       await createTestimonial({ ...form }) 
       // after create - empty input field
       form.quote = ''
       form.author = ''
       form.company = ''
     }

     return { form, onSubmit }
   } 
  }
</script>

<style lang="scss" scoped>

</style>