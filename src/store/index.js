import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation.js'
import actions from './actions.js'

Vue.use(Vuex)

const state = {
  isLogin: null,
  articles: [],
  currPage: 1,
  token: null,
  articlesTotal: 0,
  articleDetaile: {},
  userInfo: [],
  navList: [],
  socailContact: null,
  temporaryArticle: null
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
