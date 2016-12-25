import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.http.options.crossOrigin = true
Vue.http.options.credentials = true

export const Login = Vue.resource('/api/login')
export const GetArticle = Vue.resource('/api/getArticle?limit={limit}&skip={skip}')
export const GetArticleDetaile = Vue.resource('/api/getArticleDetaile/{id}')
export const GetUserInfo = Vue.resource('/api/getUserInfo')
export const GetNavList = Vue.resource('/api/getNavList')
export const GetSocailContact = Vue.resource('/api/getSocialContact')
export const RemoveArticle = Vue.resource('/api/removeArticle')
export const CreatedArticle = Vue.resource('/api/createdArticle')
export const SaveArticle = Vue.resource('/api/saveArticle')
export const UpdatePwd = Vue.resource('/api/updatePwd')
