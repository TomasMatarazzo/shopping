import Chart from './Nav/Chart'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const style = {
  flexbox: {
    display: 'flex',
    flexDirection: 'row'
  }
}
const Nav = ({ cart, eliminarDelCarro, agregarAlCarro }) => {
  return (
        <div className = "nav">
            <Link to = "/" className = "navLink"><h1>NatShein</h1></Link>
            <div style = {style.flexbox}>
            {/* ICONO DE BUSQUEDA */}
              <Link to = "/products" className = "navLink"><h1>Shop</h1></Link>
              <Chart value = {cart.length} cart = {cart} eliminarDelCarro = {eliminarDelCarro} agregarAlCarro = {agregarAlCarro}></Chart>
           </div>
        </div>
  )
}

Nav.propTypes = {
  cart: PropTypes.array,
  eliminarDelCarro: PropTypes.func,
  agregarAlCarro: PropTypes.func
}

export default Nav
