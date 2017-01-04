import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.http.options.crossOrigin = true
Vue.http.options.credentials = true

Vue.http.interceptors.push((request, next) => {
  request.headers = request.headers || {}
  let token = window.sessionStorage.getItem('token')
  if (token) {
    request.headers.set('Authorization', token)
  }
  next((response) => {
    if (response.status === 403) {
      window.sessionStorage.removeItem('token')
      window.location.pathname = '/login'
    }
    return response
  })
})

export const Login = Vue.resource('/api/login')
export const Signout = Vue.resource('/api/signout')
export const GetArticle = Vue.resource('/api/getArticle?limit={limit}&skip={skip}')
export const GetArticleDetaile = Vue.resource('/api/getArticleDetaile/{id}')
export const GetUserInfo = Vue.resource('/api/getUserInfo')
export const GetNavList = Vue.resource('/api/getNavList')
export const SaveSocailContact = Vue.resource('/api/saveSocialContact')
export const UpdateSocailContact = Vue.resource('/api/updateSocialContact')
export const RemoveSocailContact = Vue.resource('/api/removeSocialContact')
export const GetSocailContact = Vue.resource('/api/getSocialContact')
export const RemoveArticle = Vue.resource('/api/removeArticle')
export const CreatedArticle = Vue.resource('/api/createdArticle')
export const SaveArticle = Vue.resource('/api/saveArticle')
export const UpdateArticle = Vue.resource('/api/updateArticle')
export const UpdatePwd = Vue.resource('/api/updatePwd')
export const UpdateUserInfo = Vue.resource('/api/updateUserInfo')
export const AddNav = Vue.resource('/api/addNav')
export const RemoveNav = Vue.resource('/api/removeNav')
export const Search = Vue.resource('/api/search?key={id}')
