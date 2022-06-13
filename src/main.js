import { createApp } from 'vue'
import App from './App.vue'

import router from "./router";
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).use(router).mount('#app')

let account = localStorage.getItem('accessToken');
if( account ){
    window.axios = require('axios')
    window.axios.defaults.headers.common['accessToken'] = account;
}