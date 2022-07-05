import { Component } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const styles = {
  box: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between'
  }
}

class Producto extends Component {
  componentDidMount () {
    console.log(this.props)
  }

  render () {
    const { producto, agregarAlCarro } = this.props
    const { name, price, img } = producto
    console.log(price, name)
    return (
        <div className = "producto">
            <img src = {img}></img>
            <div style = {styles.box}>
                <h3>{name} Price : {price}</h3>
                <Button
                onClick = { () => agregarAlCarro(producto)}>Agregar al carro</Button>
            </div>
        </div>
    )
  }
}

Producto.propTypes = {
  producto: PropTypes.object,
  agregarAlCarro: PropTypes.func
}

export default Producto
