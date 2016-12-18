import { GetPublicNumber, Login } from './resources'

export default {
  getPublicNumber: function (id) {
    return GetPublicNumber.get({id: id})
  },
  localLogin: function (data) {
    return Login.save({id: 'local'}, data)
  }
}
