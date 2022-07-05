import Chart from './NavComponents/Chart.js/Chart'

const Nav = () => {
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

export default Nav
