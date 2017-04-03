import * as types from './mutation-type'

export default {
  [types.LOGIN] (state, result) {
    if (result.state === 1) {
      state.token = result.token
    }
  },
  [types.SIGNOUT] (state) {
    state.token = null
  },
  [types.GETARTICLE] (state, data) {
    data.articles.forEach(item => {
      state.articles.push(item)
    })
    state.articlesTotal = data.total
  },
  [types.GETARTICLELIST] (state, data) {
    state.articleList = data.articles
    state.articlesTotal = data.total
  },
  [types.GETARTICLEDETAILE] (state, data) {
    state.articleDetaile = data
  },
  [types.GETUSERINFO] (state, userInfo) {
    state.userInfo = userInfo
  },
  [types.SAVESOCAILCONTACT] (state, data) {
    state.socailContact.push(data)
  },
  [types.UPDATESOCAILCONTACT] (state, updateData) {
    let index = updateData.index
    let newData = updateData.data
    state.socailContact.splice(index, 1, newData)
  },
  [types.REMOVESOCAILCONTACT] (state, index) {
    state.socailContact.splice(index, 1)
  },
  [types.GETSOCAILCONTACT] (state, data) {
    state.socailContact = data
  },
  [types.GETNAVLIST] (state, data) {
    state.navList = data
  },
  [types.REMOVEARTICLE] (state, index) {
    state.articleList.splice(index, 1)
  },
  [types.SAVEARTICLE] (state, data) {
    state.temporaryArticle = data
  },
  [types.CREATEDARTICLE] (state, data) {
    console.log('创建成功', data)
  },
  [types.SETCURRPAGE] (state, currPage) {
    state.currPage = currPage
  },
  [types.UPDATEPWD] (state, token) {
    state.token = token
  },
  [types.UPDATEUSERINFO] (state, userInfo) {
    state.userInfo = userInfo
  },
  [types.ADDNAV] (state, navList) {
    state.navList.push(navList)
  },
  [types.REMOVENAV] (state, index) {
    state.navList.splice(index, 1)
  },
  [types.SAVEUPDATEARTICLE] (state, index) {
    state.updateArticle = state.articleList[index]
    state.isUpdateArticle = true
  },
  [types.UPDATEARTICLE] (state, data) {
    state.isUpdateArticle = false
    state.updateArticle = {}
  },
  [types.SHOW_MODAL] (state, data) {
    state.modal.show = true
    state.modal.type = data.type
    state.modal.message = data.message
    state.modal.ok = data.ok
    state.modal.cancel = data.cancel
  },
  [types.CLOSE_MODAL] (state) {
    state.modal.show = false
  },
  [types.SEARCH] (state, articles) {
    state.articles = articles
  },
  [types.GETARCHIVE] (state, archive) {
    state.archiveList = archive
  },
  [types.CAHNGEPAGERSTATUS] (state, newStatus) {
    state.pagerIsShow = newStatus
  }
}
