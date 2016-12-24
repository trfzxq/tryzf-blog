import * as types from './mutation-type.js'
import api from 'api/index.js'

export default {
  login ({ commit }, userInfo) {
    return api.localLogin(userInfo).then(response => {
      commit(types.LOGIN, response.data)
    }, (response) => {
      console.log('This is login error at actions:', response)
    })
  },
  getArticle ({ commit }, options) {
    console.log(options)
    return api.getArticle(options.limit, options.skip).then(response => {
      commit(types.GETARTICLE, response.data)
    }, response => {
      console.log('This is get article error at actions', response)
    })
  },
  getArticleDetaile ({ commit }, id) {
    return api.getArticleDetaile(id).then(response => {
      commit(types.GETARTICLEDETAILE, response.data.article)
    }, response => {
      console.log(response)
    })
  },
  getUserInfo ({ commit }) {
    return api.getUserInfo().then(response => {
      commit(types.GETUSERINFO, response.data.userInfo)
    }, response => {
      console.log(response)
    })
  },
  getSocailContact ({ commit }) {
    return api.getSocailContact().then(response => {
      commit(types.GETSOCAILCONTACT, response.data.socialContact)
    }, response => {
      console.log(response)
    })
  },
  getNavList ({ commit }) {
    return api.getNavList().then(response => {
      commit(types.GETNAVLIST, response.data.navList)
    }, response => {
      console.log(response)
    })
  },
  removeArticle ({ commit, state }, index) {
    let id = [...state.articles][index]._id
    return api.removeArticle(id).then(response => {
      commit(types.REMOVEARTICLE, index)
    }, response => {
      console.log(response)
    })
  },
  saveArticle ({ commit }, article) {
    return api.saveArticle(article).then(response => {
      commit(types.SAVEARTICLE, article)
    }, response => {
      console.log(response)
    })
  },
  createdArticle ({ commit }, article) {
    return api.createdArticle(article).then(response => {
      commit(types.CREATEDARTICLE, article)
    }, response => {
      console.log(response)
    })
  }
}
