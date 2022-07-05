import { Component } from 'react'
import Chart from './NavComponents/Chart.js/Chart'

class Nav extends Component {
  render () {
    return (
        <div className = "nav">
            <h1>NatShein</h1>
            <h1>Shop</h1>
            <div>
            {/* ICONO DE BUSQUEDA */}
               <Chart value = "2"></Chart>
           </div>
        </div>
    )
  }
}

export default Nav
