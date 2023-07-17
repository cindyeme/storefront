import Api from './Api'

export default {
  all(count) {
    return Api.get(`/${count}`)
  },
  show(id) {
    return Api.get(`/${id}`)
  }
}
