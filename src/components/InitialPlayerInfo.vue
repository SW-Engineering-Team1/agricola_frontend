<template>
  <div class="player">
    <h2>{{ playerName }}</h2>
      <div>
        <Player playerName="Player 1" :playerNumber="1" />
        <Player playerName="Player 2" :playerNumber="2" />
      </div>
    <h2>{{ playerName }}</h2>
    <h3>보조 설비 카드</h3>
    <Card v-for="card in AssiFacCards" :key="card.id" :cardTitle="card.title" :cardDescription="card.description" />
    <h3>직업 카드</h3>
    <Card v-for="card in JobCards" :key="card.id" :cardTitle="card.title" :cardDescription="card.description" />
    <!-- <h3>음식</h3> -->
    <!-- <div v-for="food in foods" :key="food.id">{{ food }}</div> -->
  </div>
</template>

<script>
import Card from './Card.vue';

export default {
  name: 'Player',
  components: {
    Card,
  },
  props: {
    playerName: {
      type: String,
      required: true,
    },
    playerNumber: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      AssiFacCards: [],
      JobCards: [],
      // foods: [],
    };
  },
  created() {
    this.setPlayerData();
  },
  methods: {
    setPlayerData() {
      if (this.playerNumber === 1) {
        this.AssiFacCards = [   // Player1 보조 설비 카드
          { id: 1, title: 'Hard ceramic', description: '아무 때나, 흙 2/3/4개를 돌 1/2/3개로 바꿀 수 있습니다.' },
          { id: 2, title: 'Carpenter room', description: '나무집에 방을 만들 때 방 1개당 나무 2개, 갈대 2개만 냅니다.' },
          { id: 3, title: 'Corn shovel', description: '“곡식 종자” 행동 칸을 이용할 때, 곡식 1개를 추가로 가져옵니다.' },
          { id: 4, title: 'Threshing plate', description: '“농지”나 “밭 농사” 행동 칸을 이용할 때, “빵 굽기” 행동을 추가로 할 수 있습니다.' },
          { id: 5, title: 'Clay mine', description: '“날품팔이” 행동 칸을 이용할 때, 흙 3개를 추가로 가져옵니다.' },
          { id: 6, title: 'Street vendor', description: '이 카드는 가족 구성원 1명을 위한 방을 제공합니다.' },
          { id: 7, title: 'Log boat', description: '“낚시” 행동 칸을 이용할 때, 음식 1개와 갈대 1개를 추가로 가져옵니다.' },
        ];
        this.JobCards = [   // Player1 직업 카드
          { id: 8, title: 'Small farmer', description: '방이 2개인 집에서 살고 있다면, 라운드가 시작될 때마다 나무 1개를 가져옵니다.' },
          { id: 9, title: 'Walled workman', description: '흙집에 방을 1개 이상 만들거나 흙집을 돌집으로 고칠 때, 음식 3개를 가져옵니다.' },
          { id: 10, title: 'Roof mower', description: '이 카드를 내려놓으면 즉시 음식 1개를 내고 방 수만큼 돌 1개씩을 가져올 수 있습니다.' },
          { id: 11, title: 'Adoptive parents', description: '음식 1개를 내고 새로 생긴 자식을 해당 라운드에 바로 행동시킬 수 있습니다. 이 경우 이 자식은 “신생아”로 보지 않습니다.' },
          { id: 12, title: 'Woodcutter', description: '나무 누적 칸을 이용할 때, 나무 1개를 추가로 가져옵니다.' },
          { id: 13, title: 'Merchandiser', description: '이 카드 위에 자원을 그림처럼 쌓습니다. 아무 때나, 맨 위에 있는 자원을 음식 1개를 내고 살 수 있습니다.' },
          { id: 14, title: 'Organic farmer', description: '점수를 계산할 때, 가축이 1마리라도 들어 있는 우리 중 우리 안에 가축을 3마리 이상 더 키울 수 있는 우리 1개당 추가점수 1점씩을 받습니다.' },
        ];
//      this.foods = [
//      ];
      }
      else if (this.playerNumber === 2) {
        this.AssiFacCards = [   // Player2 보조 설비 카드
          { id: 15, title: 'Crushed soil', description: '이 카드를 내려놓으면 즉시 흙 1개를 가져옵니다. 울타리를 칠 때 나무 대신 흙을 낼 수 있습니다.' },
          { id: 16, title: 'Manger', description: '점수를 계산할 때, 우리가 차지하고 있는 칸이 6/7/8/10개 이상이면 추가점수 1/2/3/4점을 받습니다.' },
          { id: 17, title: 'Bottle', description: '이 카드를 내려놓기 위해선 가족 구성원 1명당 흙 1개씩과 음식 1개씩을 내야 합니다.' },
          { id: 18, title: 'Kitchen room', description: '매 라운드가 시작될 때, 나무집에 살고 있다면 음식 1개를 가져옵니다.' },
          { id: 19, title: 'Field of beans', description: '이 카드는 채소만 심을 수 있는 밭으로 기능을 합니다.' },
          { id: 20, title: 'Junkyard', description: '앞으로 설비를 내려놓거나 지을 때마다(이 카드 포함) 음식 1개를 가져옵니다.' },
          { id: 21, title: 'Thick forest', description: '남은 모든 짝수 라운드 칸에 나무 1개씩을 놓습니다. 해당 라운드가 시작될 때마다 이 나무를 가져옵니다.' },
        ];
        this.JobCards = [   // Player2 직업 카드
          { id: 22, title: 'Counselor', description: '게임 인원이 1/2/3/4명일 때, 이 카드를 내려놓으면 즉시 곡식 2개/흙 3개/갈대 2개/양 2마리를 가져옵니다.' },
          { id: 23, title: 'Palanquinist', description: '흙집으로 고치는 과정 없이 나무집을 바로 돌집으로 고칠 수 있습니다.' },
          { id: 24, title: 'Property manager', description: '나무 누적 칸을 이용할 때, “빵 굽기” 행동을 추가로 할 수 있습니다.' },
          { id: 25, title: 'Subsidiary farmer', description: '“날품팔이” 행동 칸을 이용할 때, 밭 1개를 일굴 수 있습니다.' },
          { id: 26, title: 'Hedge keeper', description: '“울타리 치기” 행동을 할 때, 울타리 3개는 나무를 내지 않고 칠 수 있습니다.' },
          { id: 27, title: 'Servant', description: '돌집에 살고 있다면, 남은 모든 라운드 칸에 음식 3개씩을 놓습니다. 해당 라운드가 시작될 때마다 이 음식을 가져옵니다.' },
          { id: 28, title: 'Plowman', description: '돌집에 살고 있다면, 매 라운드가 시작될 때, 음식 1개를 내고 밭 1개를 일굴 수 있습니다. ' },
        ];
//      this.foods = [
//      ];
      }
    },
  },
};
</script>

<style scoped>
.player {
  margin-bottom: 20px;
}
</style>
