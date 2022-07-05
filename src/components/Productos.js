import { Component } from 'react'
import Producto from './Producto'
import PropTypes from 'prop-types'

class Productos extends Component {
  render () {
    const { productos, agregarAlCarro } = this.props

    return (<div className = "productos">
        {productos.map((producto) =>
        <Producto
            agregarAlCarro = {agregarAlCarro}
            key = {producto.name}
            producto = {producto}
        />)}
    </div>)
  }
}

Productos.propTypes = {
  productos: PropTypes.array,
  agregarAlCarro: PropTypes.func
}

export default Productos
