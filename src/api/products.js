import Api from './api'

export default {
  all() {
    return Api.get()
  },
  single(id) {
    return Api.get(`/${id}`)
  }
}
