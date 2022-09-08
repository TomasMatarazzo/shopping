import PropTypes from 'prop-types'
import Button from '../../components/Button'
import styled from 'styled-components'
import cartService from '../../services/cart'

const Flex = styled.div`
    display: flex;
    flex-direction:column;
    width: 100%;


    h2{
      font-size:1.4rem;
    }
    h2,h3{
      align-self:center;
      font-weight:500;
    }
`

const Producto = ({ producto, agregarAlCarro, token }) => {
  const { name, price, img, id } = producto

  const addProduct = async () => {
    // axios add product to the database
    try {
      console.log(id)
      const info = JSON.parse(window.localStorage.getItem('userEcommerce'))
      const { token } = info
      await cartService.addProductToCart(id, token)
      const isRepeated = info.cart.find((product) => product.id === id)
      let nuevaCarta = 0
      console.log(isRepeated)
      if (isRepeated === undefined) {
        nuevaCarta = { ...info, cart: [...info.cart, { ...producto, quantity: 1 }] }
      } else {
        nuevaCarta = { ...info, cart: info.cart.map((product) => product.id === id ? { ...product, quantity: product.quantity + 1 } : product) }
      }
      console.log(nuevaCarta)
      window.localStorage.setItem('userEcommerce', JSON.stringify(nuevaCarta))
      agregarAlCarro(id)
    } catch (e) {
      console.log('hubo un error')
    }
  }

  return (
        <div className = "producto">
            <img src = {img}></img>
            <Flex>
                <h2>{name}</h2>
                <h3>${price}</h3>
                <Button
                onClick = {addProduct}>Agregar al carro</Button>
            </Flex>
        </div>
  )
}

Producto.propTypes = {
  producto: PropTypes.object,
  agregarAlCarro: PropTypes.func,
  token: PropTypes.string
}

export default Producto
