import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './index.css'


createApp(App).use(AOS.init()).use(store).use(router).mount('#app')
