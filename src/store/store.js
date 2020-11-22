import Vuex from 'vuex';
import Vue from 'vue';
import user from './modules/user';
import portfolio from './modules/portfolio'
//Load vuex
Vue.use(Vuex);

//Create store
export default new Vuex.Store({
    modules: {
        user,
        portfolio
    }
});