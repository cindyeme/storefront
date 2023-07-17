import axios from 'axios'

const Api = axios.create({
  baseURL: 'https://dog.ceo/api/breeds/image/random'
})

export default Api
