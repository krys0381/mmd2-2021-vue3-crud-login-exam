<template>
  <div class="admin"> 
    <Header />
    <h1>This is an admin page</h1>
    <h1>Welcome {{ name }}</h1>
    <button  @click="logout">  <!-- v-if="user"  -->
      Logout
    </button>

    <h1>Events</h1>

    <EventCreate />
    <EventList />

    <h1>Testimonials</h1>

    <TestimonialCreate />
    <TestimonialList />

    <Footer />
  </div>
</template>


<script>
// Stuff for Login (Auth)
import Header from '../components/Header.vue'

import firebase from 'firebase'
import { ref, onBeforeMount } from 'vue'
import { /*useRoute,*/ useRouter } from 'vue-router'

import EventCreate from '@/components/EventsComponents/EventCreate.vue'
import EventList from '@/components/EventsComponents/EventList.vue'

import TestimonialCreate from '@/components/HomepageComponents/TestimonialsComponents/TestimonialCreate.vue'
import TestimonialList from '@/components/HomepageComponents/TestimonialsComponents/TestimonialList.vue'

import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
 
    Header,
    EventCreate,
    EventList,
    TestimonialCreate,
    TestimonialList,
    Footer

  },
  setup() {
    const router = useRouter()
    //const route = useRoute()

    const name = ref("")
    
    onBeforeMount(() => {
      const user = firebase.auth().currentUser // checking for the user info and store it in 'user'
      //console.log("testUser: ", user.email)
      if (user) {
        name.value = user.email.split('@')[0] // check for @ and split it there. so stuff before the @ sign.
      }
      else {
        router.push('/login') 
      }
    });
    
    const logout = () => {
      firebase
      .auth()
      .signOut()
      .then(() => {
      // Sign-out successful.
      }).catch((error) => {
        console.log("err", error.message)
      // An error happened.
      });
    }

    return { name, logout }  
  }
}
</script>
