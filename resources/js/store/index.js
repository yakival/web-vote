import axios from 'axios';
import { createStore } from 'vuex'
import serviceData from "../request";


const store = createStore({
    namespaced: true,
    state: {
        check: false,
        user: null,
        account: null,
        creator: null,
        token: null,
        chrome_id: null,
        redirect_from: null,
    },
    getters:{
        check(state){
            return state.check
        },
        user(state){
            return state.user
        },
        account(state){
            return state.account
        },
        creator(state){
            return state.creator
        },
    },
    mutations:{
        SET_CHECK (state, value) {
            state.check = value
        },
        SET_USER (state, value) {
            state.user = value
        },
        SET_ACCOUNT (state, value) {
            state.account = value
        },
        SET_CREATOR (state, value) {
            state.creator = value
        },
        SET_TOKEN (state, value) {
            state.token = value
        },
        SET_CHROME_ID (state, value) {
            state.chrome_id = value
        },
        SET_REDIRECT_FROM (state, value) {
            state.redirect_from = value
        },
    },
    actions:{
        async setCromeId({ commit }, payload) {
            commit('SET_CHROME_ID', payload);
        },
        async setRedirect({ commit }, payload) {
            commit('SET_REDIRECT_FROM', payload);
        },
        async login({ dispatch, commit, state }, payload) {
            //try {
                await axios.get('/sanctum/csrf-cookie');
                await axios.post('/api/login', payload).then(async (res) => {
                    commit('SET_TOKEN', res.data["access_token"]);
                    return await dispatch('getUser');
                }).catch((err) => {
                    throw new TypeError();
                });
            //} catch (e) {
            //    throw e
            //}
        },
        async acceptAuth({ commit }) {
            commit('SET_CHECK', true);
        },
        async logout({ commit, state }) {
            //if(state.check) {
                await axios.post('/api/logout').then((res) => {
                }).catch((err) => {
                })
            //}
            commit('SET_USER', null);
            commit('SET_CHECK', false);
            commit('SET_CREATOR', null);
            commit('SET_ACCOUNT', null);
            commit('SET_TOKEN', null);

        },
        async getUser({ dispatch, commit, state }) {
            const auth = (!state.token)?null:{
                headers: {
                    'Authorization': 'Bearer ' + state.token,
                }
            };
            await axios.get('/api/user', auth).then(async (res) => {
                commit('SET_USER', res.data);
                //await dispatch('getAccount');
                commit('SET_CHECK', true);
            }).catch((err) => {
                commit('SET_USER', null);
                commit('SET_CHECK', false);
                commit('SET_CREATOR', null);
                commit('SET_ACCOUNT', null);
                commit('SET_TOKEN', null);
            })
        },

        /*
        ////// Получаем данные по рабочей области
        async getAccount({commit, state}) {
            const user = state.user;

            let lst;
            const uid = user.id;
            let acc = user.account;

            if(!acc){
                lst = await serviceData("AccountAllListView", {userprofileid: user.id});
                if(lst){
                    acc = lst[0].id;
                    user.account = acc;
                    await axios.post('/api/users/update/' + user.id.toString(), user);
                    commit('SET_USER', user);
                }
            }
            if(acc) {
                lst = await serviceData("MemberListView", {accountid: acc})
                commit('SET_CREATOR', lst.find(sl => sl.userprofileid === uid));
                commit('SET_ACCOUNT', await serviceData("AccountDetailView", {id: acc}));
            }

        },

        async register({ dispatch }, payload) {
            try {

                await axios.post('/api/register' , payload).then((res) => {
                    return dispatch('login' , { 'email' : payload.email , 'password' : payload.password})
                }).catch((err) => {
                    throw(err.response)
                })
            } catch (e) {
                throw (e)
            }
        },
        async profile({commit},payload) {
            await axios.patch('/api/profile', payload).then((res) => {
                commit('setUser', res.data.user);
            }).catch((err) => {
                throw err.response
            })
        },
        async password({commit},payload) {
            await axios.patch('/api/password', payload).then((res) => {

            }).catch((err) => {
                throw err.response
            })
        },

        async verifyResend({dispatch} , payload){
            let res = await axios.post('/api/verify-resend' , payload)
            if (res.status !== 200) throw res
            return res
        },
        async verifyEmail({dispatch} , payload){
            let res = await axios.post('/api/verify-email/' + payload.id + '/' + payload.hash)
            if (res.status !== 200) throw res
            dispatch('getUser')
            return res

        },
        */

    },
})

export default store
