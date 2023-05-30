import { createApp } from 'vue'
import App from './App'
import router from './router'
import store from "./store/sotrage"
import './assets/styles.css'
import axios from 'axios'

const app = createApp(App)

app.config.globalProperties.$axios = axios
app.use(router).mount('#app')

createApp(App)
    .use(store)
    .use(router)
    .mount('#app');