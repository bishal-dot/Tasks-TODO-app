import './styles/style.css'
import 'vue-toast-notification/dist/theme-sugar.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './components/router';

const app = createApp(App)

app.use(createPinia());
app.use(router);

app.mount('#app')
