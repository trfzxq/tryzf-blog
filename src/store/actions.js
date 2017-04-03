import * as types from './mutation-type.js'
import api from '../api/index.js'

const _error = (address, errorResponse) => {
  console.error('An error occurred in' + address + ':' + errorResponse)
}

export default {
  login ({ commit }, userInfo) {
    return api.localLogin(userInfo).then(response => {
      return new Promise((resolve, reject) => {
        if (response.data.state === 1) {
          commit(types.LOGIN, response.data)
          resolve(response.data)
        } else {
          reject(response.data)
        }
      })
    })
  },
  signout ({ commit }) {
    return api.signout().then(response => {
      commit(types.SIGNOUT)
    })
    .catch(error => {
      _error('signout', error)
    })
  },
  getArticle ({ commit }, options) {
    return api.getArticle(options).then(response => {
      commit(types.GETARTICLE, response.data)
    })
    .catch(error => {
      _error('get article', error)
    })
  },
  getArticleList ({ commit }, options) {
    return api.getArticle(options).then(response => {
      commit(types.GETARTICLELIST, response.data)
    })
    .catch(error => {
      _error('get article', error)
    })
  },
  getArticleDetaile ({ commit }, id) {
    return api.getArticleDetaile(id).then(response => {
      commit(types.GETARTICLEDETAILE, response.data.article)
    })
    .catch(error => {
      _error('get article detaile', error)
    })
  },
  getUserInfo ({ commit }) {
    return api.getUserInfo().then(response => {
      commit(types.GETUSERINFO, response.data.userInfo)
    })
    .catch(error => {
      _error('get user info', error)
    })
  },
  saveSocailContact ({ commit }, data) {
    return api.saveSocailContact(data).then(response => {
      commit(types.SAVESOCAILCONTACT, data)
    })
    .catch(error => {
      _error('save socail contact', error)
    })
  },
  updateSocailContact ({ commit }, updateData) {
    return api.updateSocailContact(updateData.data).then(response => {
      commit(types.UPDATESOCAILCONTACT, updateData)
    })
    .catch(error => {
      _error('update socail contact', error)
    })
  },
  removeSocailContact ({ commit, state }, index) {
    let id = [...state.socailContact][index]._id
    return new Promise((resolve, reject) => {
      api.removeSocailContact(id).then(response => {
        if (response.data.state === 1) {
          resolve(response.data.msg)
          commit(types.REMOVESOCAILCONTACT, index)
        } else {
          reject(response.data.msg)
        }
      })
      .catch(error => {
        reject(error)
      })
    })
  },
  getSocailContact ({ commit }) {
    return api.getSocailContact().then(response => {
      commit(types.GETSOCAILCONTACT, response.data.socialContact)
    })
    .catch(error => {
      _error('get socail contact', error)
    })
  },
  getNavList ({ commit }) {
    return api.getNavList().then(response => {
      commit(types.GETNAVLIST, response.data.navList)
    })
    .catch(error => {
      _error('get nav list', error)
    })
  },
  getArchive ({ commit }) {
    return api.getArchive().then(response => {
      commit(types.GETARCHIVE, response.data.archive)
    })
    .catch(error => {
      _error('get archive', error)
    })
  },
  removeArticle ({ commit, state }, index) {
    let id = [...state.articles][index]._id
    return api.removeArticle(id).then(response => {
      commit(types.REMOVEARTICLE, index)
    })
    .catch(error => {
      _error('remove article', error)
    })
  },
  saveArticle ({ commit }, article) {
    return new Promise((resolve, reject) => {
      api.saveArticle(article).then(response => {
        if (response.data.state === 1) {
          resolve(response.data.msg)
          commit(types.SAVEARTICLE, article)
        } else {
          reject(response.data.msg)
        }
      })
      .catch(error => {
        reject(error.msg)
      })
    })
  },
  updateArticle ({ commit }, data) {
    return api.updateArticle(data).then(response => {
      commit(types.UPDATEARTICLE, data)
    })
    .catch(error => {
      _error('update article', error)
    })
  },
  saveUpdateArticle ({ commit }, index) {
    commit(types.SAVEUPDATEARTICLE, index)
  },
  createdArticle ({ commit }, article) {
    return new Promise((resolve, reject) => {
      api.createdArticle(article).then(response => {
        if (response.data.state === 1) {
          resolve(response.data.msg)
        } else {
          reject(response.data.msg)
        }
        commit(types.CREATEDARTICLE, article)
      })
      .catch(error => {
        reject(error.msg)
      })
    })
  },
  setCurrPage ({ commit }, currPage) {
    commit(types.SETCURRPAGE, currPage)
  },
  updatePwd ({ commit }, data) {
    return api.updatePwd(data).then(response => {
      commit(types.UPDATEPWD, response)
    })
    .catch(error => {
      _error('update pwd', error)
    })
  },
  updateUserInfo ({ commit }, data) {
    return new Promise((resolve, reject) => {
      api.updateUserInfo(data)
      .then(response => {
        if (response.data.state === 1) {
          resolve(response.data.msg)
          commit(types.UPDATEUSERINFO, response.data.userInfo)
        } else {
          reject(response.data.msg)
        }
      })
      .catch(error => {
        reject(error.data.msg)
      })
    })
  },
  addNav ({ commit }, data) {
    return api.addNav(data).then(response => {
      commit(types.ADDNAV, data)
    })
    .catch(error => {
      _error('add nav', error)
    })
  },
  removeNav ({ commit, state }, index) {
    let id = [...state.navList][index]._id
    return new Promise((resolve, reject) => {
      api.removeNav(id).then(response => {
        if (response.data.state === 1) {
          commit(types.REMOVENAV, index)
          resolve(response.data.msg)
        } else {
          reject(response.data.msg)
        }
      })
      .catch(error => {
        reject(error)
      })
    })
  },
  search ({ commit }, key) {
    return api.search(key).then(response => {
      commit(types.SEARCH, response.data.articles)
    })
    .catch(error => {
      _error('search', error)
    })
  },
  changePagerStatus ({ commit }, newStatus) {
    commit(types.CAHNGEPAGERSTATUS, newStatus)
  }
}
