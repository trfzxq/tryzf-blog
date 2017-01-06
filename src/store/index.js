import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation.js'
import actions from './actions.js'
import moment from 'moment'

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

const getters = {
  getArticleList: state => {
    state.articles.map(article => {
      article.date = moment(new Date(article.date)).locale('zh-cn').calendar()
    })
    return state.articles
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
