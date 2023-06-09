import { createApp } from 'vue'
import App from './App'
import router from './router/routes.js'
import store from './store/store.js'
import './index.css'
import axios from 'axios'


const app = createApp(App)

app.config.globalProperties.$axios = axios
app.use(router).mount('#app')

createApp(App)
    .use(store)
    .use(router)
    .mount('#app');