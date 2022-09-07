import Producto from './Producto'
import PropTypes from 'prop-types'

const Productos = ({ productos, agregarAlCarro, token }) => {
  return (
  <div className = "productos">
        {productos.map((producto) =>
        <Producto
            agregarAlCarro = {agregarAlCarro}
            key = {producto.id}
            producto = {producto}
            token = {token}
        />)}
    </div>)
}

Productos.propTypes = {
  productos: PropTypes.array,
  agregarAlCarro: PropTypes.func,
  token: PropTypes.string
}

export default Productos
