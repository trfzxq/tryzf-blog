import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import {formatDateTime} from '../filters/index'

Vue.use(Vuex)

const state = {
  isHeader: true,
  articles: [],
  currPage: 1,
  currUpdateArticle: {},
  pagerIsShow: true,
  isUpdateArticle: false,
  articlesTotal: 0,
  articleDetaile: {},
  userInfo: {},
  navList: [],
  socailContact: [],
  temporaryArticle: null,
  articleList: [],
  archiveList: []
}

const getters = {
  getArticleList: state => {
    state.articles.map(article => {
      article.date = formatDateTime(new Date(article.date))
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
