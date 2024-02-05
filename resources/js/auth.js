import axios from 'axios'
import router from './routes';
import driverAuthBearer      from '@websanova/vue-auth/dist/drivers/auth/bearer.esm.js';
import driverHttpAxios       from '@websanova/vue-auth/dist/drivers/http/axios.1.x.esm.js';
import driverRouterVueRouter from '@websanova/vue-auth/dist/drivers/router/vue-router.2.x.esm.js';
// can be override in method calls
const config = {
    plugins: {
        http: axios, // Axios
        router: router,
    },
    drivers: {
        auth: driverAuthBearer,
        http: driverHttpAxios,
        router: driverRouterVueRouter,
        oauth2: {}
    },
    options: {
        tokenDefaultName: 'laravel-vue-spa',
        tokenStore: ['localStorage'],
        rolesVar: 'role',
        registerData: {url: 'auth/register', method: 'POST', redirect: '/login'},
        loginData: {url: 'auth/login', method: 'POST', redirect: '', fetchUser: true},
        logoutData: {url: 'auth/logout', method: 'POST', redirect: '/', makeRequest: true},
        fetchData: {url: 'auth/user', method: 'GET', enabled: true},
        refreshData: {url: 'auth/refresh', method: 'GET', enabled: true, interval: 30}
    }
}

export default config
