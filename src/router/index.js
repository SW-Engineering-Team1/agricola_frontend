import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage'
import LobbyPage from '../views/LobbyPage'
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
    path: '/RegisterForm',
    name: 'Register',
    component: RegisterForm,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router