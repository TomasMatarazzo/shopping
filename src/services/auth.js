import axios from 'axios'
const baseUrl = 'http://localhost:5050/api/auth'

const login = async (user) => {
  console.log(user)
  axios.defaults.withCredentials = true
  const request = axios.post(`${baseUrl}/login`, user)
  return request.then(response => {
    console.log(response.status)
    console.log(response.data)
    return response.data
  })
}
const signup = (newObject) => {
  console.log(newObject)
  axios.defaults.withCredentials = true
  const request = axios.post(`${baseUrl}/signup`, newObject)
  return request.then(response => {
    console.log(response.status)
    return response.data
  })
}

export default {
  signup,
  login
}
