import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios,axios);
import App from './App.vue';
import Boxchat from './components/Boxchat.vue';
Vue.use(VueRouter)
const routes = [
    {
        name: 'Boxchat',
        path: '/',
        component: Boxchat
    },
];
const router = new VueRouter({ mode: 'history', routes: routes});
new Vue(Vue.util.extend({ router }, App)).$mount('#app');
