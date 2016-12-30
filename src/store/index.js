import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation.js'
import actions from './actions.js'

Vue.use(Vuex)

const modal = {
  show: false,
  type: 'info',
  message: '模拟提示',
  ok: () => {},
  cancel: () => {}
}

const state = {
  articles: [],
  currPage: 1,
  currUpdateArticle: {},
  isUpdateArticle: false,
  articlesTotal: 0,
  articleDetaile: {},
  userInfo: {},
  navList: [],
  socailContact: [],
  temporaryArticle: null,
  modal: modal
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
