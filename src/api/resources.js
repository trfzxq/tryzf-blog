import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.http.options.crossOrigin = true
Vue.http.options.credentials = true

export const Login = Vue.resource('/api/login')
export const GetArticle = Vue.resource('/api/getArticle?limit={limit}&sizePage={sizePage}')
export const GetArticleDetaile = Vue.resource('/api/getArticleDetaile/{id}')
export const GetUserInfo = Vue.resource('/api/getUserInfo')
export const GetNavList = Vue.resource('/api/getNavList')
export const GetSocailContact = Vue.resource('/api/getSocailContact')
