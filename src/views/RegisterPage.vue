<template>
  <div class="flex items-center justify-center h-screen">
    <div class="container mx-auto max-w-sm bg-gray-300">
      <form @submit.prevent="register" class="mx-auto">
        <div class="input p-5">
          <h2 class="text-xl font-bold mb-2">회원가입</h2>
          <InputField type="text" v-model="uid" placeholder="ID를 입력해주세요." />
          <InputField type="password" v-model="password" placeholder="비밀번호를 입력해주세요." />
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
import InputField from '@/components/InputField.vue';
import authService from '@/service/authService';

export default {
  name: 'RegisterPage',
  components: {
    InputField
  },
  setup() {
    const router = useRouter();
    const uid = ref('');
    const password = ref('');

    const register = async () => {
      try {
        const success = await authService.signUp(uid.value, password.value);
        if (success) {
          alert('회원가입 성공');
          await router.push({path: '/'});
        } else {
          alert('회원가입 실패하였습니다.');
        }
      } catch (e) {
        console.log(e);
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