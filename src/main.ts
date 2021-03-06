import { createApp } from 'vue'
import App from './App.vue'
import TDesign from 'tdesign-vue-next';
import { createPinia } from 'pinia'

// 引入组件库全局样式资源
import 'tdesign-vue-next/es/style/index.css';
import './styles'


const app = createApp(App);
app.use(createPinia())
app.use(TDesign);
app.mount('#app')
