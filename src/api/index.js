import { GetArticle, Login, GetArticleDetaile } from './resources'

export default {
  getArticle: function (limit, sizePage) {
    return GetArticle.get({limit: limit, sizePage: sizePage})
  },
  getArticleDetaile: function (id) {
    return GetArticleDetaile.get({id: id})
  },
  localLogin: function (data) {
    return Login.save({id: 'local'}, data)
  }
}
