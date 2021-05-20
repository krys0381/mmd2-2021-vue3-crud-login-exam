<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="register">
      <input type="text" placeholder="email" v-model="email" />
      <input type="password" placeholder="password" v-model="password" /> 
      <input type="submit" value="register">
      <p>Have an account -
        <router-link to="/login">login here</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import firebase from 'firebase'

export default {
  setup() {
    const email = ref("");
    const password = ref ("")

    const register = () => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then(user => {
          alert(user.email)
        })
        .catch(err => console.log(err.message))
    }

    return { password, email, register }

  } 
}
</script>

<style lang="scss" scoped>

</style>