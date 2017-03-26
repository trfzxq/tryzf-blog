import * as types from './mutation-type.js'
import api from '../api/index.js'

const showModal = (commit, data) => {
  commit(types.SHOW_MODAL, data)
}

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
          showModal(commit, {
            message: response.data.msg,
            type: 'error'
          })
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
  getArticleDetaile ({ commit }, id) {
    return api.getArticleDetaile(id).then(response => {
      console.log(response.data)
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
    if (!data.src || !data.path) {
      showModal(commit, {
        message: '路径或图片路径不能为空',
        type: 'error'
      })
      return
    }
    return api.saveSocailContact(data).then(response => {
      commit(types.SAVESOCAILCONTACT, data)
    })
    .catch(error => {
      _error('save socail contact', error)
    })
  },
  updateSocailContact ({ commit }, updateData) {
    if (!updateData.data.src || !updateData.data.path) {
      showModal(commit, {
        message: '路径或图片路径不能为空',
        type: 'error'
      })
      return
    }
    return api.updateSocailContact(updateData.data).then(response => {
      showModal(commit, {
        message: '修改成功',
        type: 'info'
      })
      commit(types.UPDATESOCAILCONTACT, updateData)
    })
    .catch(error => {
      _error('update socail contact', error)
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
        })
        .catch(error => {
          _error('remove socail contact', error)
        })
      }
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
    showModal(commit, {
      message: '确实删除',
      type: 'question',
      ok: () => {
        return api.removeArticle(id).then(response => {
          commit(types.REMOVEARTICLE, index)
        })
        .catch(error => {
          _error('remove article', error)
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
    })
    .catch(error => {
      showModal(commit, {
        message: '保存失败',
        type: 'error'
      })
      _error('save article', error)
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
    if (!article.title || !article.types || !article.content) {
      showModal(commit, {
        message: '小家伙，内容没填写完整',
        type: 'error'
      })
      return
    }
    return api.createdArticle(article).then(response => {
      showModal(commit, {
        message: response.data.msg + '是否要去首页',
        type: 'success',
        ok: () => {
          window.location.pathname = '/'
        }
      })
      commit(types.CREATEDARTICLE, article)
    })
    .catch(error => {
      showModal(commit, {
        message: 'oh!on~' + error.data.msg,
        type: 'error'
      })
      _error('created article', error)
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
    })
    .catch(error => {
      showModal(commit, {
        message: error.data.msg
      })
      _error('update pwd', error)
    })
  },
  updateUserInfo ({ commit }, data) {
    if (!data.blogTitle || !data.headURL || !data.motto) {
      showModal(commit, {
        message: '添加些资料感觉好点吧！！！',
        type: 'info'
      })
      return
    }
    return api.updateUserInfo(data).then(response => {
      showModal(commit, {
        message: response.data.msg,
        type: 'info'
      })
      commit(types.UPDATEUSERINFO, response.data.userInfo)
    })
    .catch(error => {
      showModal(commit, {
        message: error.data.msg,
        type: 'info'
      })
      _error('update user info', error)
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
    })
    .catch(error => {
      _error('add nav', error)
    })
  },
  removeNav ({ commit, state }, index) {
    showModal(commit, {
      message: '确定删除',
      ok: () => {
        let id = [...state.navList][index]._id
        return api.removeNav(id).then(response => {
          commit(types.REMOVENAV, index)
        })
        .catch(error => {
          _error('remove nav', error)
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
    })
    .catch(error => {
      _error('search', error)
    })
  },
  changePagerStatus ({ commit }, newStatus) {
    commit(types.CAHNGEPAGERSTATUS, newStatus)
  }
}
