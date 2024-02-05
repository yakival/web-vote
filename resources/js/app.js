/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

//require('./bootstrap');

import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.material.orange.light.css';

import { createApp } from 'vue'

import store from './store'
import router from './routes';
import App from './components/app';

import axios from 'axios'
import VueAxios from 'vue-axios'

// Set Vue authentication
import {createAuth}          from '@websanova/vue-auth';
import driverAuthBearer      from '@websanova/vue-auth/dist/drivers/auth/bearer.esm.js';
import driverHttpAxios       from '@websanova/vue-auth/dist/drivers/http/axios.1.x.esm.js';
import driverRouterVueRouter from '@websanova/vue-auth/dist/drivers/router/vue-router.2.x.esm.js';
import driverOAuth2Google    from '@websanova/vue-auth/dist/drivers/oauth2/google.esm.js';
import driverOAuth2Facebook  from '@websanova/vue-auth/dist/drivers/oauth2/facebook.esm.js';

driverOAuth2Google.params.client_id = 'GOOGLE-TOKEN';
driverOAuth2Facebook.params.client_id = 'FACEBOOK-TOKEN';

store.dispatch('getUser').then(()=> {
    createApp(App).use(router).use(VueAxios, axios).use(store).mount("#app");
})

/*
const app = new Vue({
    el: '#app',
    components: { App },
    router,
});
 */
