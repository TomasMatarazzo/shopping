import Chart from './NavComponents/Chart.js/Chart'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
        <div className = "nav">
            <Link to = "/" className = "navLink"><h1>NatShein</h1></Link>
            <Link to = "/products" className = "navLink"><h1>Shop</h1></Link>
            <div>
            {/* ICONO DE BUSQUEDA */}
               <Chart value = "2"></Chart>
           </div>
        </div>
  )
}

export default Nav
