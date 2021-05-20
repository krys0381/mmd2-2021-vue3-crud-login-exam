<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input type="text" placeholder="email" v-model="email" />
      <input type="password" placeholder="password" v-model="password" /> 
      <input type="submit" value="login">
      <p>Need an account? 
        <router-link to="/register">Register here</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import firebase from 'firebase'
import { useRouter } from 'vue-router'

  export default {
    setup() {
      const router = useRouter()

      const email = ref("")
      const password = ref("")

      const login = async () => {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value)
          .then(() => {})
          .catch(err => alert(err.message)); // just to check if we want
          router.replace('/admin')
      }
      return { login, email, password } // remember me!
      // test - email badly formatted - No user existing at all
    }    
  }
</script>

<style lang="scss" scoped>

</style>