import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { CartMenu } from './CartMenu'

const Chart = ({ cart, value, eliminarDelCarro, agregarAlCarro }) => {
  const [showCart, setShowBar] = useState(false)

  const showNumber = (n) => {
    console.log(n)
    if (n > 0) {
      if (n > 9) { n = '9+' } // javascript hace lo que quiere con los tipos :)
      return <div className="Header_cartLengthBlack__ChUiR">{n}<svg className="Header_svgArrowBlack__2-N38" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M21 12l-18 12v-24z"></path></svg></div>
    }
    return ''
  }

  useEffect(() => { console.log(size(cart)) }, [])

  const size = (cart) => {
    let cant = 0
    if (cart.length > 0) {
      cart.forEach(element => {
        cant += element.quantity
      })
    }
    return cant
  }
  return (
            <div className = "cart-box" onClick = {() => setShowBar(!showCart)}>
                {showNumber(size(cart))}
                <svg className="Header_svgCart__182oV" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16 6v-2c0-2.209-1.791-4-4-4s-4 1.791-4 4v2h-5v18h18v-18h-5zm-7-2c0-1.654 1.346-3 3-3s3 1.346 3 3v2h-6v-2zm10 18h-14v-14h3v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h3v14z"></path></svg>
                <CartMenu isVisible = {showCart} cart = {cart} eliminarDelCarro = {eliminarDelCarro} agregarAlCarro = {agregarAlCarro}>hola</CartMenu>
            </div>
  )
}

Chart.propTypes = {
  value: PropTypes.string,
  cart: PropTypes.array,
  eliminarDelCarro: PropTypes.func,
  agregarAlCarro: PropTypes.func
}

export default Chart
