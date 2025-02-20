import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import './style.css';
import './assets/fonts/iconfont.css'
import MyIcon from './components/MyIcon.vue';
import store from './store';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'

const app = createApp(App);
app.use(store)
app.use(router);
app.use(ElementPlus)
app.component('MyIcon',MyIcon)
app.mount('#app');