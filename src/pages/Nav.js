import Chart from './Nav/Chart'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const style = {
  flexbox: {
    display: 'flex',
    flexDirection: 'row'
  }
}
const Nav = ({ cart }) => {
  return (
        <div className = "nav">
            <Link to = "/" className = "navLink"><h1>NatShein</h1></Link>
            <div style = {style.flexbox}>
            {/* ICONO DE BUSQUEDA */}
              <Link to = "/products" className = "navLink"><h1>Shop</h1></Link>
              <Chart value = "2" cart = {cart}></Chart>
           </div>
        </div>
  )
}

Nav.propTypes = {
  cart: PropTypes.array
}

export default Nav
