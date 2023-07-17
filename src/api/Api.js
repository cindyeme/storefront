import axios from 'axios'

const Api = axios.create({
  baseURL: 'https://dog.ceo/api/breeds/image/random/50'
})

export default Api
