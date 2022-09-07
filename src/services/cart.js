import axios from 'axios'
const baseUrl = 'http://localhost:8080/api/products'

const addProductToCart = async (id, token) => {
  const config = {
    headers: { Authorization: token }
  }

  const response = await axios.post(`${baseUrl}/${id}`, config)
  return response.data
}

const deleteProductFromCart = async (newObject, id, token) => {
  const config = {
    headers: { Authorization: token }
  }

  const response = await axios.post(`${baseUrl}/${id}`, config)
  return response.data
}

export default {
  addProductToCart,
  deleteProductFromCart
}
