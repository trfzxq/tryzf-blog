import * as types from './mutation-type'

export default {
  [types.SET_RESULT] (state, result) {
    state.result = result.data.data
  },
  [types.COLLECT_IT] (state, time) {
    state = time
  },
  [types.DELETE_COLLECTION] (state, time) {
    state = time
  }
}
