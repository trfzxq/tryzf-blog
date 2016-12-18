import * as types from './mutation-type.js'
import api from 'api/index.js'

export default {
  login ({ commit }, userInfo) {
    return api.localLogin(userInfo).then(response => {
      commit(types.LOGIN, response.data)
    }, (response) => {
      console.log(response)
    })
  }
}
