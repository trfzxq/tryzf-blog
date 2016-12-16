import { GetPublicNumber } from './resources'

export default {
  getPublicNumber: function (id) {
    return GetPublicNumber.get({id: id})
  }
}
