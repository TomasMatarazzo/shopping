import Chart from '../components/NavComponents/Chart.js/Chart'
import { Link } from 'react-router-dom'

const style = {
  flexbox: {
    display: 'flex',
    flexDirection: 'row'
  }
}
const Nav = () => {
  return (
        <div className = "nav">
            <Link to = "/" className = "navLink"><h1>NatShein</h1></Link>
            <div style = {style.flexbox}>
            {/* ICONO DE BUSQUEDA */}
              <Link to = "/products" className = "navLink"><h1>Shop</h1></Link>
              <Chart value = "2"></Chart>
           </div>
        </div>
  )
}

export default Nav
