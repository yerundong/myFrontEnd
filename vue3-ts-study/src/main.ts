import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

import componentGlobalRegistration from '@/components/componentGlobalRegistration'
app.use(componentGlobalRegistration)

app.mount('#app')
