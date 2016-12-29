import * as types from './resources'

export default {
  getArticle: function (options) {
    return types.GetArticle.get({limit: options.limit, skip: options.skip, name: options.name})
  },
  getArticleDetaile: function (id) {
    return types.GetArticleDetaile.get({id: id})
  },
  localLogin: function (data) {
    return types.Login.save(data)
  },
  signout: function (data) {
    return types.Signout.get()
  },
  getUserInfo: function () {
    return types.GetUserInfo.get()
  },
  getNavList: function () {
    return types.GetNavList.get()
  },
  saveSocailContact: function (data) {
    return types.SaveSocailContact.save(data)
  },
  removeSocailContact: function (id) {
    return types.RemoveSocailContact.delete({id: id})
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
  updateArticle: function (data) {
    return types.UpdateArticle.update(data)
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
  },
  search: function (id) {
    return types.Search.get({id: id})
  }
}
