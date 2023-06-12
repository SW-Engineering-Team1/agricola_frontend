<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-4xl mb-4">게임 결과</h1>
    <table class="table-auto">
      <thead>
      <tr>
        <th class="px-4 py-2">등수</th>
        <th class="px-4 py-2">플레이어</th>
        <th class="px-4 py-2">점수</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="player in sortedPlayers" :key="player.name">
        <td class="border px-4 py-2">{{ player.rank }}</td>
        <td class="border px-4 py-2">{{ player.userId }}</td>
        <td class="border px-4 py-2">{{ player.score }}</td>
      </tr>
      </tbody>
    </table>
    <router-link to="/lobby" class="mt-4 px-4 py-2 rounded bg-blue-500 text-white">로비로 돌아가기</router-link>
  </div>
</template>

<script>
import {computed, ref} from 'vue';
import {useStore} from 'vuex'

export default {
  setup() {
    const store = useStore();

    const gameResult = ref(computed(() => store.state.gameResult));

    const sortedPlayers = computed(() => {
      return gameResult.value
          .map((player, index) => ({ ...player, rank: index + 1 }))
          .sort((a, b) => b.score - a.score);
    });

    return {
      sortedPlayers
    }
  },

}
</script>

<style scoped>
</style>
