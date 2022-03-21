import { createApp } from 'vue'
import App from './App.vue'
import TDesign from 'tdesign-vue-next';
import { createPinia } from 'pinia'
import router from '@/router/index'

// 引入组件库全局样式资源
import 'tdesign-vue-next/es/style/index.css';
import './styles'


const app = createApp(App);
app.use(router)
app.use(createPinia())
app.use(TDesign);
app.mount('#app')
