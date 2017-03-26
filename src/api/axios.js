import axios from 'axios'
import qs from 'qs'
import store from '../store/index'
axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.baseURL = 'http://localhost:8080'

axios.defaults.validateStatus = function (status) {
  return status >= 200 && status < 300 || status === 304
}

axios.interceptors.request.use(config => {
  if (store.state.token) {
    config.headers.Authorization = store.state.token
  }
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(res => {
  return res
}, error => {
  if (error.response) {
    if (error.response.status === 403) {
      window.location.href = '/'
    }
  }
  return Promise.reject(error)
})

export default axios
