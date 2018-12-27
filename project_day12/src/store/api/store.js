const state = {
    num: 1000
}

const mutations = {
    changNum(state, action) {
        console.log('state...',state,'action...',action)
    }
}

export default {
    namespaced: true,
    state,
    mutations
}