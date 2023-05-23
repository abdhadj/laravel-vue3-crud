import './bootstrap';

// import Alpine from 'alpinejs';

// window.Alpine = Alpine;

// Alpine.start();

import { createApp } from 'vue';
import App from './layouts/App.vue' 
import router from './routes/index'


createApp(App) 
    // .component('PostsIndex', PostsIndex)
    .use(router) 
    .mount('#app') 
