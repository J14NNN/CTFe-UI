import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
export default createStore({
  state: {
    locale: 'en', // 默认语言为英语

    challengesVuex: [],
    challengesLocal:{},
    challId:0,
  },
  mutations: {
    setLocale(state, locale) {
      state.locale = locale
    },

    setChallenges(state, Challenges) {
      state.challengesVuex = Challenges
      // localStorage.setItem('challenges', JSON.stringify(Challenges)) 
    },
    

    setChallId(state,cid){
      state.challId = cid
    }
  },
  actions: {
    setLocale({ commit }, locale) {
      commit('setLocale', locale)
    },

    // getChallengeById(state, id) {  
    //   // make API call to get challenge data by id
    //   return api.getChallenge(id).then(challenge => {
    //     state.commit('setChallenge', challenge) 
    //   }) 
    // }
    
  },
  // plugins: [
  //   createPersistedState({
  //     key: 'my-app-state', // 用于存储持久状态的键名
  //     paths: ['locale'] // 要存储的状态路径
  //   },
  //   )
  // ],
  getters: {
    getChallenge: (state)=> {
      const challenge = state.challengesVuex.find((challenge )=> challenge.id == state.challId);
      return challenge ? challenge : 'error';
    }
  }



})