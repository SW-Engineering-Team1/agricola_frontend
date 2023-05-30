import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import { createApp } from 'vue'
import LoginPage from '../views/LoginPage'
import LobbyPage from '../views/LobbyPage'
import RoomPage from '../views/RoomPage'
import RegisterForm from '../views/RegisterForm'

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
    component: RoomPage,
  },
  {
    path: '/RegisterForm',
    name: 'Register',
    component: RegisterForm,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')

export default router