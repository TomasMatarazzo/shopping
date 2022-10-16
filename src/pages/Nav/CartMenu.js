import styled from 'styled-components'
import PropTypes from 'prop-types'
import ProductCart from './ProductCart'
import Button from '../../components/Button'

const Div = styled.div`
    z-index: 10;
    width: 33.3%;
    background:#f8f5f2;
    top:0;
    right:0;
    overflow:auto;
    height:100%;
    position:fixed;
    -webkit-transition:all ease-in-out 0.7s;

    &.shrink{
    right:calc(-33.3% - 25px);
    all ease-in-out 0.7s;

    }
`

const H1 = styled.h1`
    margin-top:30px;
    margin-bottom:30px;
    font-size:2rem;
    font-weight:700;
`

export const CartMenu = ({ isVisible, cart, eliminarDelCarro, agregarAlCarro }) => {
  return (
    <Div className = {isVisible ? '' : 'shrink'}>
        <H1>Your shopping cart</H1>
        {cart.length !== 0 ? cart.map(product => <ProductCart key = {product.id} product = {product} eliminarDelCarro = {eliminarDelCarro} agregarAlCarro = {agregarAlCarro}></ProductCart>) : <h1>Your bag is empty</h1>}
        <Button>Browse Products</Button>
    </Div>
  )
}

CartMenu.propTypes = {
  isVisible: PropTypes.bool,
  cart: PropTypes.array,
  eliminarDelCarro: PropTypes.func,
  agregarAlCarro: PropTypes.func
}
