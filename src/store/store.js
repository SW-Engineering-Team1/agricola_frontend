import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
  state: {
    user: null,
    token: null,
    playersInRoom: [],
    gameStatus: [],
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
    setPlayersInRoom(state, players) {
      state.playersInRoom = players;
    },
    resetPlayersInRoom(state) {
      state.playersInRoom = [];
    },
    setGameStatus(state, gameStatus) {
      state.gameStatus = gameStatus;
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