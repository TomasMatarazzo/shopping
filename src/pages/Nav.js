import Chart from './Nav/Chart'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const style = {
  flexbox: {
    display: 'flex',
    flexDirection: 'row',
    margin: '10px'
  }
}
const Nav = ({ cart, eliminarDelCarro, agregarAlCarro, user, info }) => {
  return (
        <div className = "nav">
            <Link to = "/" className = "navLink"><h1>NatShein</h1></Link>
            <div style = {style.flexbox}>
            {/* ICONO DE BUSQUEDA */}
              <Link to = "/products" className = "navLink"><h1>Shop</h1></Link>
              {
                user == null
                  ? <>
                  <Link to = "/login" className = "navLink"><h1>Login</h1></Link>
                  <Link to = "/signup" className = "navLink"><h1>Signup</h1></Link>
                    </>
                  : <Link to = "/info" className = "navLink" ><h1>Account</h1></Link>
              }
              <Chart value = {cart.length} cart = {cart} eliminarDelCarro = {eliminarDelCarro} agregarAlCarro = {agregarAlCarro}></Chart>
           </div>
        </div>
  )
}

Nav.propTypes = {
  cart: PropTypes.array,
  eliminarDelCarro: PropTypes.func,
  agregarAlCarro: PropTypes.func,
  user: PropTypes.bool,
  info: PropTypes.object
}

export default Nav
