import axios from './axios.js'

export default {
  getArticle: function (options) {
    let url = '/api/getArticle'
    return axios.get(url, {
      params: {limit: options.limit, skip: options.skip, name: options.name}
    })
  },
  getArticleDetaile: function (id) {
    let url = '/api/getArticleDetaile/' + id
    return axios.get(url)
  },
  localLogin: function (data) {
    let url = '/api/login'
    return axios.post(url, data)
  },
  signout: function (data) {
    let url = '/api/signout'
    return axios.get(url)
  },
  getUserInfo: function () {
    let url = '/api/getUserInfo'
    return axios.get(url)
  },
  getNavList: function () {
    let url = '/api/getNavList'
    return axios.get(url)
  },
  saveSocailContact: function (data) {
    let url = '/api/saveSocialContact'
    return axios.post(url, data)
  },
  updateSocailContact: function (data) {
    let url = '/api/updateSocialContact'
    return axios.put(url, data)
  },
  removeSocailContact: function (id) {
    let url = '/api/removeSocialContact'
    return axios.delete(url, {
      params: {id: id}
    })
  },
  getSocailContact: function () {
    let url = '/api/getSocialContact'
    return axios.get(url)
  },
  removeArticle: function (id) {
    let url = '/api/removeArticle'
    return axios.delete(url, {
      params: {id: id}
    })
  },
  saveArticle: function (data) {
    let url = '/api/saveArticle'
    return axios.post(url, data)
  },
  updateArticle: function (data) {
    let url = '/api/updateArticle'
    return axios.put(url, data)
  },
  createdArticle: function (data) {
    let url = '/api/createdArticle'
    return axios.post(url, data)
  },
  updatePwd: function (data) {
    let url = '/api/updatePwd'
    return axios.put(url, data)
  },
  updateUserInfo: function (data) {
    let url = '/api/updateUserInfo'
    return axios.put(url, data)
  },
  addNav: function (data) {
    let url = '/api/addNav'
    return axios.post(url, data)
  },
  removeNav: function (id) {
    let url = '/api/removeNav'
    return axios.delete(url, {
      params: {id: id}
    })
  },
  search: function (id) {
    let url = '/api/search'
    return axios.get(url, {
      params: {id: id}
    })
  },
  getArchive: function () {
    let url = '/api/getArchive'
    return axios.get(url)
  }
}
