<template>
  <div class="flex items-center justify-center h-screen">
    <div class="container mx-auto  max-w-sm bg-gray-300">
    <form @submit="login" class="mx-auto">
      <div class="input mb-6">
        <h2 class="text-xl font-bold mb-2">Login</h2>
        <label for="id" class="mb-2">Username</label>
        <input type="text" name="username" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="username" />
        <br>
        <label for="password" class="mb-2">Password</label>
        <input type="password" name="password" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="password" />
      </div>
      <div class="mb-4">
        You don't have an account?
        <span @click="moveToRegister" class="text-blue-500 cursor-pointer">Register</span>
      </div>
      <button class="button" type="submit">Login</button>
    </form>
  </div>
  </div>
</template>

<script>
//import axios from 'axios'

export default {
  name: 'LoginPage',
  data() {
    return {
      uid: "",
      password: ""
    };
  },
  methods: {
    async login() {
      try {
        const userData = {
          uid: this.uid,
          password: this.password
        };
        const response = await this.$axios.post('http://localhost:3000/user/signup', userData);
        console.log(response.data);
      }catch (error) {
        console.error(error);
        }         
    },
    moveToRegister() {
      this.$router.push('/RegisterForm');
    }
  }
};
</script>

<style scoped>

</style>


