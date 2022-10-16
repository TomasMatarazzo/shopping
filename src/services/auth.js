import axios from 'axios'
// const productionUrl = 'https://ecommercecoderr.herokuapp.com/api/auth'
const devUrl = 'http://localhost:5050/api/auth'

const login = async (user) => {
  axios.defaults.withCredentials = true
  const request = axios.post(`${devUrl}/login`, user)
  return request.then(response => {
    return response.data
  })
}
const signup = (newObject) => {
  axios.defaults.withCredentials = true
  const request = axios.post(`${devUrl}/signup`, newObject)
  return request.then(response => {
    return response.data
  })
}

export default {
  signup,
  login
}
