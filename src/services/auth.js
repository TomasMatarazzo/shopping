import axios from 'axios'
const baseUrl = 'http://localhost:5050/api/auth'

const login = async (user) => {
  axios.defaults.withCredentials = true
  const request = axios.post(`${baseUrl}/login`, user)
  return request.then(response => {
    return response.data
  })
}
const signup = (newObject) => {
  axios.defaults.withCredentials = true
  const request = axios.post(`${baseUrl}/signup`, newObject)
  return request.then(response => {
    return response.data
  })
}

export default {
  signup,
  login
}
