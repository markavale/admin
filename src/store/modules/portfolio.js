import { getAPI } from "@/api/axiosConfig"; //axiosBase
// import router from "@/router";
const state = {
    pageViews: 0,
    messages: [],
    ratings: [],
    loading: false
};

const getters = {
    getPageViews: (state) => state.pageViews,
    getMessages: (state) => state.messages,
    getRatings: (state) => state.ratings
};

const actions = {
    // get total page views
    fetchPageViews: (context) => {
        return new Promise((resolve, reject) => {
            getAPI
                .get('api/page-views/')
                .then((res) => {
                    console.log(res.data)
                    resolve(true)
                    context.commit('setPageViews', res.data)
                })
                .catch(err => reject(err))
        })
    },
    // get all messages
    fetchMessages: (context) => {
        return new Promise((resolve, reject) => {
            getAPI
                .get('api/messages/')
                .then((res) => {
                    console.log(res.data)
                    resolve(true)
                    context.commit('setMessages', res.data)
                })
                .catch(err => reject(err))
        })
    },
    // get all ratings
    fetchRatings: (context) => {
        return new Promise((resolve, reject) => {
            getAPI
                .get('api/ratings/')
                .then((res) => {
                    console.log(res.data)
                    resolve(true)
                    context.commit('setRatings', res.data)
                })
                .catch(err => reject(err))
        })
    },
};

const mutations = {
    setPageViews: (state, payload) => (state.pageViews = payload),
    setMessages: (state, payload) => (state.messages = payload),
    setRatings: (state, payload) => (state.ratings = payload)
};

export default {
    state,
    getters,
    actions,
    mutations,
};