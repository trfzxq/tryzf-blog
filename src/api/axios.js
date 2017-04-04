import axios from 'axios'
import qs from 'qs'
import store from '../store/index.js'

axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'http://localhost:8080' : 'http://tryzf.xyz'
axios.defaults.validateStatus = function (status) {
  return status >= 200 && status < 300 || status === 304
}

axios.interceptors.request.use(config => {
  let token = store.state.token
  if (token) {
    config.headers.Authorization = token
  }
  config.data = qs.stringify(config.data)
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(res => {
  return res
}, error => {
  if (error.response) {
    if (error.response.status === 403) {
      return Promise.reject({state: 403, msg: '您无权访问!'})
    }
  }
  return Promise.reject(error)
})

export default axios
