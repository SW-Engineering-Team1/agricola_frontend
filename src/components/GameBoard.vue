<template>
  <div class="game-board">
    <div class="board-layout">
      <div v-for="row in boardLayout" :key="row.id" class="board-row">
        <div v-for="tile in row.tiles" :key="tile.id" class="tile">
          {{ tile.content }}
        </div>
      </div>
    </div>
    <div class="player-position">
      <div class="player-icon">{{ playerIcon }}</div>
      <div class="player-info">
        <p>플레이어 위치: {{ playerPosition }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameBoard',
  data() {
    return {
      boardLayout: [
        { id: 1, tiles: [
          { id: 1, content: '타일 1' },
          { id: 2, content: '타일 2' },
          { id: 3, content: '타일 3' },
          // ... 추가적인 타일 데이터
          
        ]},
        // ... 추가적인 행과 타일 데이터
      ],
      playerIcon: '플레이어',
      playerPosition: { row: 0, tile: 0 }, // 플레이어 위치 초기값
    };
  },

// methods: {
//    moveToRegister() {
//        this.$router.push('/RegisterForm');
//    }
// }

};
</script>

<style scoped>
.game-board {
  display: flex;
  justify-content: center;
  align-items: center;
}

.board-layout {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.board-row {
  display: flex;
  gap: 10px;
}

.tile {
  width: 50px;
  height: 50px;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
}

.player-icon {
  width: 30px;
  height: 30px;
  background-color: blue;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.player-info {
  margin-top: 10px;
}
</style>