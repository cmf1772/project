import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger'
import upload from './modules/updata'
import cityPicker from './modules/cityPicker'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        upload,
        cityPicker
    },
    plugins: [createLogger()]
})