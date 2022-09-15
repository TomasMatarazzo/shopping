import axios from 'axios'
const baseUrl = 'http://localhost:5050/api/carrito'

const addProductToCart = async (id, token) => {
  const response = await axios.post(`${baseUrl}/${id}`, { hello: 'world' }, { headers: { Authorization: token } })
  return response.data
}

const deleteProductFromCart = async (newObject, id, token) => {
  const config = {
    headers: { Authorization: token }
  }

  const response = await axios.post(`${baseUrl}/${id}`, { hello: 'world' }, config)
  return response.data
}

export default {
  addProductToCart,
  deleteProductFromCart
}
