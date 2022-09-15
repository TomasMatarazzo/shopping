import axios from 'axios'
const productionUrl = 'https://ecommercecoderr.herokuapp.com/api/carrito'
// const devUrl = 'http://localhost:5050/api/carrito'

const addProductToCart = async (id, token) => {
  const response = await axios.post(`${productionUrl}/${id}`, { hello: 'world' }, { headers: { Authorization: token } })
  return response.data
}

const deleteProductFromCart = async (newObject, id, token) => {
  const config = {
    headers: { Authorization: token }
  }

  const response = await axios.post(`${productionUrl}/${id}`, { hello: 'world' }, config)
  return response.data
}

export default {
  addProductToCart,
  deleteProductFromCart
}
