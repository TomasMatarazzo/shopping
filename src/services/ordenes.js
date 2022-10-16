import axios from 'axios'
//  const productionUrl = 'https://ecommercecoderr.herokuapp.com/api/carrito'
const devUrl = 'http://localhost:5050/api/ordenes'

const createOrden = async (token) => {
  const response = await axios.post(`${devUrl}`, { hello: 'world' }, { headers: { Authorization: token } })
  return response.data
}

export default {
  createOrden
}
