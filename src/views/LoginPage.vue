<template>
  <div class="flex items-center justify-center h-screen">
    <div class="container mx-auto  max-w-sm bg-gray-300">
      <form @submit.prevent="login" class="mx-auto">
        <div class="input p-5">
          <h2 class="text-xl font-bold mb-2">로그인</h2>
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
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit" >로그인</button>
      </form>
      <div class="mb-4">
        계정이 없으신가요?
        <span @click="moveToRegister" class="text-blue-500 cursor-pointer">회원가입</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  name: 'LoginPage',
  setup() {
    const store = useStore();
    const router = useRouter();
    const uid = ref('');
    const password = ref('');

    const login = async () => {
      try {
        const response = await fetch('http://localhost:3000/user/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id: uid.value,
            password: password.value
          })
        });
        const data = await response.json();
        if (!data.isSuccess) {
          throw new Error("로그인 실패");
        }

        // 로그인 성공 시 store에 토큰 저장
        // await store.dispatch('login', { user: data.user, token: data.token });

        // 자동으로 로비 페이지로 이동
        router.push({path: '/lobby'});
      } catch (e) {
        console.log(e);
      }
    }

    const moveToRegister = () => {
      router.push('/FullScreen');
    }

    return {
      uid,
      password,
      login,
      moveToRegister
    };
  }
};
</script>

<style scoped>

</style>


