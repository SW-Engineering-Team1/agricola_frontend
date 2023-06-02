<template>
  <div class="flex items-center justify-center h-screen">
    <div class="container mx-auto max-w-sm bg-gray-300">
      <form @submit.prevent="register" class="mx-auto">
        <div class="input p-5">
          <h2 class="text-xl font-bold mb-2">회원가입</h2>
          <input
            type="text"
            v-model="uid"
            name="username"
            class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="ID를 입력해주세요."
          />
          <input
            type="password"
            v-model="password"
            name="password"
            class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="비밀번호를 입력해주세요."
          />
        </div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit" >회원가입</button>
      </form>
      <div class="mb-4">
        이미 계정이 있으신가요?
        <span @click="moveToLogin" class="text-blue-500 cursor-pointer">로그인</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

export default {
  name: 'RegisterPage',
  setup() {
    const router = useRouter();
    const uid = ref('');
    const password = ref('');

    const register = async () => {
      const userData = {
        id: uid.value,
        password: password.value
      };

      try {
        const response = await axios.post('http://localhost:3000/user/signup', userData);
        if (response.status == 200) {
          alert('회원가입 성공')
          router.push({path:'/'});
        }
        else {
          alert('회원가입 실패하였습니다.');
        }
      } catch (err) {
        console.log(err);
      }
    };

    const moveToLogin = () => {
      router.push('/');
    };

    return {
      uid,
      password,
      register,
      moveToLogin
    };
  }
};
</script>