import PropTypes from 'prop-types'
import styled from 'styled-components'

const Flex = styled.div`
display:flex;
justify-content:center;
`

const StyledProductCart = styled(Flex)`
  position:relative;
  padding-left:10px;
  padding-top:10px;
  padding-bottom:10px;
  
  img{
    width:110px;
    height:110px;
  }
  
  .data{
    width:55%
  }
  .title{
    padding:4px;
    font-size:1.2rem;
    justify-content: flex-start;
    font-weight:700;
  }

  .description{
    padding:10px;
    justify-content:flex-start;
    font-size:1rem;
    font-weight:500;
    
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
  `
// const StyledButton = styled.button`
//   width: 42px;
//   height: 42px;
//   outline: none;
//   background: none;
//   border: none;
//   cursor: pointer;
//   `
// const Input = styled.input`
//   width: 42px;
//   height: 42px;
//   line-height: 42px;
//   text-align: center;
//   border: 1px solid #e6dcd2;
//   background: none;
//   font-size: .9rem;
//   font-family: "Montserrat SemiBold";
//   font-weight: 600;
//   -webkit-appearance: none;
//   margin:0;
//   font-family: 'Poppins', sans-serif;

// `

const ProductCart = ({ key, product, eliminarDelCarro, agregarAlCarro }) => {
  const { name, price, img, quantity } = product
  return (
  <StyledProductCart>
    <img src = {img}></img>
    <div className = "data">
      <Flex className = "title">
        <div>{name}</div>
      </Flex>
      {/* <Flex className = "description"> Es algo muy muy nashe</Flex> */}
      <Flex className = "title">
        {`${quantity} x ${price}`}
      </Flex>
      {/* <StyledButton onClick = {() => agregarAlCarro(id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"></path></svg></StyledButton> */}
    </div>
  </StyledProductCart>)
}

ProductCart.propTypes = {
  key: PropTypes.id,
  product: PropTypes.object,
  eliminarDelCarro: PropTypes.func,
  agregarAlCarro: PropTypes.func
}

export default ProductCart
