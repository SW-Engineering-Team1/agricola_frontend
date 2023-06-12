import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import { createApp } from 'vue'
import LoginPage from '../views/LoginPage'
import LobbyPage from '../views/LobbyPage'
import ReadyRoomPage from '../views/ReadyRoomPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import GamePage from '../views/GamePage.vue'
import GameResultPage from '@/views/GameResultPage.vue'

const routes = [
  {
    path: '/', // 첫 화면을 로그인 화면으로 설정
    name: 'login',
    component: LoginPage
  },
  {
    path: '/lobby',
    name: 'lobby',
    component: LobbyPage,
  },
  {
    path: '/room/:room',
    name: 'room',
    component: ReadyRoomPage,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterPage,
  },
  {
    path: '/room/:room/game',
    name: 'game',
    component: GamePage,
  },
  {
    path: '/room/:room/gameResult',
    name: 'gameResult',
    component: GameResultPage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')

export default router