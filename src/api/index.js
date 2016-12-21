import * as types from './resources'

export default {
  getArticle: function (limit, sizePage) {
    return types.GetArticle.get({limit: limit, sizePage: sizePage})
  },
  getArticleDetaile: function (id) {
    return types.GetArticleDetaile.get({id: id})
  },
  localLogin: function (data) {
    return types.Login.save({id: 'local'}, data)
  },
  getUserInfo: function () {
    return types.GetUserInfo.get()
  },
  getNavList: function () {
    return types.GetNavList.get()
  },
  getSocailContact: function () {
    return types.GetSocailContact.get()
  }
}
