import Api from './Api'

export default {
  all() {
    return Api.get()
  },
  show(id) {
    return Api.get(`/${id}`)
  }
}
