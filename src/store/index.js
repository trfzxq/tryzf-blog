import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation.js'
import actions from './actions.js'

Vue.use(Vuex)

const state = {
  articles: [],
  currPage: 1,
  articlesTotal: 0,
  articleDetaile: {},
  userInfo: [],
  navList: [],
  socailContact: [],
  temporaryArticle: null
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
