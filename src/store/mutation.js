import * as types from './mutation-type'

export default {
  [types.LOGIN] (state, result) {
    state.loginState = result
  },
  [types.GETARTICLE] (state, data) {
    state.articles = data
  },
  [types.GETARTICLEDETAILE] (state, data) {
    state.articleDetaile = data
  }
}
