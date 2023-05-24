<template>
    <div class="flex items-center justify-center h-screen">
        <div class="container mx-auto max-w-sm bg-gray-300">
        <form @submit.prevent="register">
        <div class="input mb-6">
            <h2 class="text-xl font-bold mb-2">Register</h2>
            <label for="uid" class="mb-2">Username</label>
            <input type="text" v-model ="uid" name="uid" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="username" />
            <br>
            <label for="password" class="mb-2">Password</label>
            <input type="password" v-model="password" name="password" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="password" />
        </div>
        <div class="mb-4">
            Already have an account?
            <span @click="moveToLogin" class="text-blue-500 cursor-pointer">Login</span>
        </div>
        <button class="rounded-full" type="submit">Register</button>
        </form>
    </div>
    </div>
</template>

<script>
export default {
    name: 'RegisterPage',
    data() {
        return{
            uid: '',
            password: ''
        };
    },

    methods: {
        async register() {
                const userData = {
                    id: this.uid,
                    password: this.password
                };
                this.$axios.post('http://localhost:3000/user/signup', userData).then(function (res) {
                console.log(res);
                if (res.status == 200) {
                    alert('회원 가입 완료되었습니다.');
                    this.$router.push('/');
                }
                else {
                    alert('회원 가입 실패하였습니다.');
                }
                }).catch(function (err) {
                    console.log(err);
                });
        },
        moveToLogin() {
            this.$router.push('/');
        },
    },
};
</script>

<style>
</style>