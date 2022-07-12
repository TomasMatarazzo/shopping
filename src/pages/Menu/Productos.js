import Producto from './Producto'
import PropTypes from 'prop-types'

const Productos = ({ productos, agregarAlCarro }) => {
  return (
  <div className = "productos">
        {productos.map((producto) =>
        <Producto
            agregarAlCarro = {agregarAlCarro}
            key = {producto.name}
            producto = {producto}
        />)}
    </div>)
}

Productos.propTypes = {
  productos: PropTypes.array,
  agregarAlCarro: PropTypes.func
}

export default Productos
