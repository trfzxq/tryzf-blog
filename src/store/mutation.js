import * as types from './mutation-type'

export default {
  [types.LOGIN] (state, result) {
    state.loginState = result
  }
}
