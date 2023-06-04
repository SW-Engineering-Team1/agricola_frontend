<template>
  <div class="flex items-center justify-center h-screen">
    <div class="container mx-auto  max-w-sm bg-gray-300">
      <form @submit.prevent="login" class="mx-auto">
        <div class="input p-5">
          <h2 class="text-xl font-bold mb-2">로그인</h2>
          <InputField type="text" v-model="uid" placeholder="ID를 입력해주세요." />
          <InputField type="password" v-model="password" placeholder="비밀번호를 입력해주세요." />
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
import InputField from '@/components/InputField.vue';
import authService from '@/service/authService';

export default {
  name: 'LoginPage',
  components: {
    InputField
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const uid = ref('');
    const password = ref('');

    const login = async () => {
      try {
        const data = await authService.signIn(uid.value, password.value);
        const user = await authService.getPayload(data.result.token);
        await store.dispatch('login', {user: user.result.id, token: data.result.token});
        await router.push({path: '/lobby'});
      } catch (e) {
        console.log(e);
      }
    }

    const moveToRegister = () => {
      router.push('/register');
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