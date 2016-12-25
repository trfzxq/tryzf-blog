import * as types from './resources'

export default {
  getArticle: function (limit, skip) {
    return types.GetArticle.get({limit: limit, skip: skip})
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
  },
  removeArticle: function (id) {
    return types.RemoveArticle.delete({id: id})
  },
  saveArticle: function (data) {
    return types.SaveArticle.save(data)
  },
  createdArticle: function (data) {
    return types.CreatedArticle.save(data)
  },
  updatePwd: function (data) {
    return types.UpdatePwd.update(data)
  },
  updateUserInfo: function (data) {
    return types.UpdateUserInfo.update(data)
  },
  addNav: function (data) {
    return types.AddNav.save(data)
  },
  removeNav: function (id) {
    return types.RemoveNav.delete({id: id})
  }
}
