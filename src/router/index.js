import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

// for editing (CRUD)
import Edit from '../views/Edit.vue'

// For login stuff
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

// route guarding
//import firebase from 'firebase'
//import 'firebase/firestore'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/edit/:id',  // id parameter to know which project we clicked
    name: 'Edit',
    component: Edit
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
