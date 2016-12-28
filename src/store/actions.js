import * as types from './mutation-type.js'
import api from 'api/index.js'

const showModal = (commit, data) => {
  commit(types.SHOW_MODAL, data)
}

export default {
  login ({ commit }, userInfo) {
    return api.localLogin(userInfo).then(response => {
      commit(types.LOGIN, response.data)
    }, (response) => {
      console.log('This is login error at actions:', response)
    })
  },
  signout ({ commit }) {
    return api.signout().then(response => {
      commit(types.SIGNOUT)
    }, response => {
      console.log(response)
    })
  },
  getArticle ({ commit }, options) {
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
  saveSocailContact ({ commit }, data) {
    return api.saveSocailContact(data).then(response => {
      commit(types.SAVESOCAILCONTACT, data)
    }, response => {
      console.log(response)
    })
  },
  removeSocailContact ({ commit, state }, index) {
    let id = [...state.socailContact][index]._id
    return api.removeSocailContact(id).then(response => {
      commit(types.REMOVESOCAILCONTACT, index)
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
    if (!article.title) {
      showModal(commit, {
        message: '标题不能为空'
      })
      return
    }
    return api.saveArticle(article).then(response => {
      commit(types.SAVEARTICLE, article)
    }, response => {
      console.log(response)
    })
  },
  updateArticle ({ commit }, data) {
    return api.updateArticle(data).then(response => {
      commit(types.UPDATEARTICLE, data)
    }, response => {
      console.log(response)
    })
  },
  saveUpdateArticle ({ commit }, index) {
    commit(types.SAVEUPDATEARTICLE, index)
  },
  createdArticle ({ commit }, article) {
    return api.createdArticle(article).then(response => {
      commit(types.CREATEDARTICLE, article)
    }, response => {
      console.log(response)
    })
  },
  setCurrPage ({ commit }, currPage) {
    commit(types.SETCURRPAGE, currPage)
  },
  updatePwd ({ commit }, data) {
    return api.updatePwd(data).then(response => {
      commit(types.UPDATEPWD, response)
    }, response => {
      console.log(response)
    })
  },
  updateUserInfo ({ commit }, data) {
    return api.updateUserInfo(data).then(response => {
      commit(types.UPDATEUSERINFO, response.data.userInfo)
    }, response => {
      console.log(response)
    })
  },
  addNav ({ commit }, data) {
    return api.addNav(data).then(response => {
      commit(types.ADDNAV, data)
    }, response => {
      console.log(response)
    })
  },
  removeNav ({ commit, state }, index) {
    let id = [...state.navList][index]._id
    return api.removeNav(id).then(response => {
      commit(types.REMOVENAV, index)
    }, response => {
      console.log(response)
    })
  },
  showModal ({ commit }, data) {
    commit(types.SHOW_MODAL, data)
  },
  closeModal ({ commit }) {
    commit(types.CLOSE_MODAL)
  }
}
