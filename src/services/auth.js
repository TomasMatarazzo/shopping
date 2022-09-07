import axios from 'axios'
const baseUrl = 'http://localhost:8080/api/auth'

// let token = null

// const setToken = newToken => {
//   token = `bearer ${newToken}`
// }

// const create = async newObject => {
//   const config = {
//     headers: { Authorization: token }
//   }

//   const response = await axios.post(`${baseUrl}/signup`, newObject, config)
//   return response.data
// }

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
