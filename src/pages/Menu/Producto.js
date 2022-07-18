import PropTypes from 'prop-types'
import Button from '../../components/Button'
import styled from 'styled-components'

const Flex = styled.div`
    display: flex;
    flex-direction:column;
    width: 100%;


    h2{
      font-size:1.4rem;
    }
    h2,h3{
      align-self:center;
      font-weight:500;
    }
`

const Producto = ({ producto, agregarAlCarro }) => {
  const { name, price, img, id } = producto
  return (
        <div className = "producto">
            <img src = {img}></img>
            <Flex>
                <h2>{name}</h2>
                <h3>${price}</h3>
                <Button
                onClick = { () => agregarAlCarro(id)}>Agregar al carro</Button>
            </Flex>
        </div>
  )
}

Producto.propTypes = {
  producto: PropTypes.object,
  agregarAlCarro: PropTypes.func
}

export default Producto
