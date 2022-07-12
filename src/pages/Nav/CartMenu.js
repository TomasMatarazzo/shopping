import styled from 'styled-components'
import PropTypes from 'prop-types'

export const CartMenu = ({ isVisible, cart }) => {
  const CartMenu = styled.div`
    z-index: 7;
    width: 33.3%;
    background:#f8f5f2;
    top:0;
    right:0;
    position:fixed;
    overflow:auto;
    height:100%;
    transition: all ease-in-out 0.3s;

    &.expand{
    transition: all ease-in-out 0.3s;
    right: 0;

    }

    &.shrink{
    transition: all ease-in-out 0.3s;
    right:calc(-33.3% - 25px);
    }
    `

  return (
    <CartMenu className = {isVisible ? 'expand' : 'shrink'}>
        {cart.size !== 0 ? cart.map(product => <div key = {product.id}>{product.id}</div>) : null}
    </CartMenu>
  )
}

CartMenu.propTypes = {
  isVisible: PropTypes.bool,
  cart: PropTypes.array
}
