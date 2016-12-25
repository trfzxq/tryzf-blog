import * as types from './mutation-type'

export default {
  [types.LOGIN] (state, result) {
    if (result.state === 1) {
      console.log(result.token)
      state.token = result.token
    }
    state.loginState = result
  },
  [types.GETARTICLE] (state, data) {
    state.articles = data.articles
    state.articlesTotal = data.total
  },
  [types.GETARTICLEDETAILE] (state, data) {
    state.articleDetaile = data
  },
  [types.GETUSERINFO] (state, userInfo) {
    console.log(userInfo)
    state.userInfo = userInfo
  },
  [types.GETSOCAILCONTACT] (state, data) {
    state.socailContact = data
  },
  [types.GETNAVLIST] (state, data) {
    state.navList = data
  },
  [types.REMOVEARTICLE] (state, index) {
    state.articles.splice(index, 1)
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
  }
}
