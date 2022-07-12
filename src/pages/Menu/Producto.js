import PropTypes from 'prop-types'
import Button from '../../components/Button'

const styles = {
  box: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between'
  }
}

const Producto = ({ producto, agregarAlCarro }) => {
  const { name, price, img, id } = producto
  return (
        <div className = "producto">
            <img src = {img}></img>
            <div style = {styles.box}>
                <h3>{name} Price : {price}</h3>
                <Button
                onClick = { () => agregarAlCarro(id)}>Agregar al carro</Button>
            </div>
        </div>
  )
}

Producto.propTypes = {
  producto: PropTypes.object,
  agregarAlCarro: PropTypes.func
}

export default Producto
