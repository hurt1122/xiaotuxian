import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
//引用懒加载自定义插件
import { LazyPlugin } from '@/directives/index'

import '@/styles/common.scss'

const app = createApp(App)



app.use(createPinia())
app.use(router)
app.use(LazyPlugin)
app.mount('#app')

