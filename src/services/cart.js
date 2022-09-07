import axios from 'axios'
const baseUrl = 'http://localhost:8080/api/products'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const create = async newObject => {
  const config = {
    headers: { Authorization: token }
  }

  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const signup = () => {
  console.log('probando la conexion')
  const request = axios.post(baseUrl)
  return request.then(response => response.data)
}

export default {
  signup,
  create,
  setToken
}
