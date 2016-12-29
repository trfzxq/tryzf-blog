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
    return api.getArticle(options).then(response => {
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
    if (!data.src || !data.path) {
      showModal(commit, {
        message: '路径或图片路径不能为空',
        type: 'error'
      })
      return
    }
    return api.saveSocailContact(data).then(response => {
      commit(types.SAVESOCAILCONTACT, data)
    }, response => {
      console.log(response)
    })
  },
  removeSocailContact ({ commit, state }, index) {
    showModal(commit, {
      message: '确定删除？',
      type: 'question',
      ok: () => {
        let id = [...state.socailContact][index]._id
        return api.removeSocailContact(id).then(response => {
          commit(types.REMOVESOCAILCONTACT, index)
        }, response => {
          console.log(response)
        })
      }
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
    showModal(commit, {
      message: '确实删除',
      type: 'question',
      ok: () => {
        return api.removeArticle(id).then(response => {
          commit(types.REMOVEARTICLE, index)
        }, response => {
          console.log(response)
        })
      }
    })
  },
  saveArticle ({ commit }, article) {
    if (!article.title || !article.types || !article.content) {
      showModal(commit, {
        message: '小家伙，内容没填写完整',
        type: 'error'
      })
      return
    }
    return api.saveArticle(article).then(response => {
      showModal(commit, {
        message: '已保存！',
        type: 'success'
      })
      commit(types.SAVEARTICLE, article)
    }, response => {
      showModal(commit, {
        message: '保存失败',
        type: 'error'
      })
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
    if (!article.title || !article.types || !article.content) {
      showModal(commit, {
        message: '小家伙，内容没填写完整',
        type: 'error'
      })
      return
    }
    return api.createdArticle(article).then(response => {
      showModal(commit, {
        message: '你真棒！' + response.data.msg,
        type: 'success'
      })
      commit(types.CREATEDARTICLE, article)
    }, response => {
      showModal(commit, {
        message: 'oh!on~' + response.data.msg,
        type: 'error'
      })
      console.log(response)
    })
  },
  setCurrPage ({ commit }, currPage) {
    commit(types.SETCURRPAGE, currPage)
  },
  updatePwd ({ commit }, data) {
    if (!data.oldPwd || !data.newPwd) {
      showModal(commit, {
        message: '密码不能为空',
        type: 'error'
      })
      return
    }
    return api.updatePwd(data).then(response => {
      showModal(commit, {
        message: response.data.msg
      })
      commit(types.UPDATEPWD, response)
    }, response => {
      showModal(commit, {
        message: response.data.msg
      })
      console.log(response)
    })
  },
  updateUserInfo ({ commit }, data) {
    return api.updateUserInfo(data).then(response => {
      showModal(commit, {
        message: response.data.msg,
        type: 'info'
      })
      commit(types.UPDATEUSERINFO, response.data.userInfo)
    }, response => {
      showModal(commit, {
        message: response.data.msg,
        type: 'info'
      })
      console.log(response)
    })
  },
  addNav ({ commit }, data) {
    if (!data.path || !data.text) {
      showModal(commit, {
        message: '添加信息不能为空',
        type: 'error'
      })
      return
    }
    return api.addNav(data).then(response => {
      commit(types.ADDNAV, data)
    }, response => {
      console.log(response)
    })
  },
  removeNav ({ commit, state }, index) {
    showModal(commit, {
      message: '确定删除',
      ok: () => {
        let id = [...state.navList][index]._id
        return api.removeNav(id).then(response => {
          commit(types.REMOVENAV, index)
        }, response => {
          console.log(response)
        })
      }
    })
  },
  showModal ({ commit }, data) {
    commit(types.SHOW_MODAL, data)
  },
  closeModal ({ commit }) {
    commit(types.CLOSE_MODAL)
  },
  search ({ commit }, key) {
    return api.search(key).then(response => {
      commit(types.SEARCH, response.data.articles)
    }, response => {
      console.log(response)
    })
  }
}
