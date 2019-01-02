import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger'
import upload from './modules/updata'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        upload
    },
    plugins: [createLogger()]
})