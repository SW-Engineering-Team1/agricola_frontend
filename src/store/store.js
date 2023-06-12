import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

// 초기 state 객체를 반환하는 함수
const getDefaultState = () => {
  return {
    user: null,
    token: null,
    host: null,
    playersInRoom: [],
    gameStatus: [],
    remainedMajorFac: [],
    currentRound: 1,
    accumulatedResources: [],
    gameResult: [],
  }
}

export default createStore({
  state: getDefaultState(),
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
    setHost(state, host) {
      state.host = host;
    },
    setPlayersInRoom(state, players) {
      state.playersInRoom = players;
    },
    resetPlayersInRoom(state) {
      state.playersInRoom = [];
    },
    setGameStatus(state, gameStatus) {
      state.gameStatus = gameStatus;
    },
    setRemainedMajorFac(state, remainedMajorFac) {
      state.remainedMajorFac = remainedMajorFac;
    },
    setCurrentRound(state, currentRound) {
      state.currentRound = currentRound;
    },
    setAccumulatedResources(state, accumulatedResources) {
      state.accumulatedResources = accumulatedResources;
    },
    setGameResult(state, gameResult) {
      state.gameResult = gameResult;
    },
    resetStore(state) {
      Object.assign(state, getDefaultState());
    }
  },
  actions: {
    login({ commit }, payload) {
      commit('setUser', payload.user);
      commit('setToken', payload.token);
    },
  },
  getters: {
    user: (state) => state.user,
    token: (state) => state.token,
    isAuthenticated: (state) => !!state.token,
  },
  plugins: [createPersistedState()],
});