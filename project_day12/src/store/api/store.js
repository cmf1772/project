import { promises } from "fs";
import { rejects } from "assert";

const state = {
    num: 1000
}

//同步操作 
const mutations = {
    changNum(state, action) {
        console.log('state...', state, 'action...', action)
    }
}

//异步操作
const actions = {
    changeNumSync(context , action) {
        return new Promise((resolve, reject) => {
            context.commit({
                type: 'changNum',
                payload: action.payload
            })
            resolve()
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}