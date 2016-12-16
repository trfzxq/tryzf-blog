import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)
export const GetPublicNumber = Vue.resource('https://cnodejs.org/api/v1/topics?limit={id}')
