import axios from 'axios'
const baseUrl = 'http://localhost:5050/api/carrito'

const addProductToCart = async (id, token) => {
  const response = await axios.post(`${baseUrl}/${id}`, { headers: { Authorization: token } })
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
