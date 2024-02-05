import { createRouter, createWebHistory } from "vue-router";

import VueRouter from 'vue-router'

import Pult from "./components/Pult";
import Config from "./components/Config";

import WebConfig from "./components/float/config";
import WebControl from "./components/float/control";
import WebMonitor from "./components/float/monitor";
import Float from "./components/float/float";
import Login from "./components/Login";
import Logout from "./components/Logout";

import store from "./store";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // ЕВРОВИДЕНИЕ
        {
            path: '/floatmonitor',
            component: WebMonitor,
            meta: {guard: "guest"},
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {guard: "guest"},
        },
        {
            path: '/logout',
            name: 'logout',
            component: Logout,
            meta: {guard: "auth"},
        },
        {
            path: '/float',
            component: Float,
            children: [
                {
                    path: 'control',
                    name: "float-control",
                    components: {
                        float: WebControl
                    },
                    meta: {guard: "auth"},
                },
                {
                    path: 'config',
                    name: "float-config",
                    components: {
                        float: WebConfig
                    },
                    meta: {guard: "auth"},
                },
                {
                    path: '',
                    components: {
                        float: WebConfig
                    },
                    meta: {guard: "auth"},
                },
            ]
        },
        // НАСТРОЙКА ПУЛЬТОВ
        {
            path: '/config',
            component: Config,
            name: "config",
            meta: {guard: "auth"},
        },
        // ПУЛЬТ
        {
            path: '/pult',
            component: Pult,
            meta: {guard: "guest"},
        },
        {
            path: '',
            component: Config,
            meta: {guard: "auth"},
        },
    ],
});

router.beforeEach(async (to, from, next) => {

    await store.dispatch('setRedirect', to.redirectedFrom);
    if(to.matched.some(route => route.meta.guard === 'guest')) {
        //if (to.name === 'login') {
            if (store.state.check) {
                await store.dispatch('logout');
            }
        //}
        return next();
    }else{
        if (store.state.check) {
            //if (to.matched.some(route => route.meta.guard === 'guest')) next({name: 'home'})
            //else
            next();

        } else {
            next({name: 'login'});
            //if (to.matched.some(route => route.meta.guard === 'auth')) next({name: 'login'})
            //else next();
        }
    }

    // if (store.getters.user) {
    //   if (to.name === 'login' || to.name === 'register') next({ name: 'home' })
    //   else next()
    // } else {

    //   if (to.name !== 'login' && to.name !== 'register') next({ name: 'login' })
    //   else next()
    // }
})

export default router
