import * as types from './mutation-type.js'
import api from '../api/index.js'

export default {
  setResult ({ commit }, key) {
    return new Promise((resolve, reject) => {
      api.getPublicNumber(key).then(response => {
        commit(types.SET_RESULT, response)
        resolve(response)
      }, response => {
        reject(response)
      })
    })
  },
  collectIt ({ commit }, data) {
    commit(types.COLLECT_IT, data)
  },
  deleteCollection ({ commit }, data) {
    commit(types.DELETE_COLLECTION, data)
  }
}
