import { createRouter, createWebHistory } from 'vue-router'
import Events from '../views/EventsView.vue'
import Homepage from '../views/HomepageView.vue'
import AboutView from '../views/AboutView.vue'
import Contact from '../views/ContactView.vue'

// for editing (CRUD)
import EditEvents from '../views/EditEvents.vue'
import EditTestimonials from '../views/EditTestimonials.vue'

// For login stuff
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

// route guarding
//import firebase from 'firebase'
//import 'firebase/firestore'

const routes = [
  {
    path: '/',
    name: 'HomepageView',
    component: Homepage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/events',
    name: 'EventsView',
    component: Events
  },
  {
    path: '/contact',
    name: 'ContactView',
    component: Contact
  },
  {
    path: '/editEvents/:id',  // id parameter to know which project we clicked
    name: 'EditEvents',
    component: EditEvents
  },
  {
    path: '/editTestimonials/:id',  // id parameter to know which project we clicked
    name: 'EditTestimonials',
    component: EditTestimonials
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register', 
    component: Register
  },
  {
    path: '/admin',
    name: 'Admin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
  
})
export default router
