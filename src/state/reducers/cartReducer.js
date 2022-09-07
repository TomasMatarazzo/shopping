import { TYPES } from '../actions/types'

export const cartReducer = (state, action) => {
  switch (action.type) {
    case TYPES.SETCART:{
      return { ...state, cart: action.payload }
    }
    case TYPES.SETINFO:{
      return { ...state, info: action.payload }
    }
    case TYPES.SETUSER:{
      return { ...state, user: true }
    }
    case TYPES.SETTOKEN:{
      return { ...state, token: `bearer ${action.payload}` }
    }
    case TYPES.LOGOUT:{
      return { ...state, user: null, info: null, token: null, cart: [] }
    }
    case TYPES.ADDTOCART:{
      const itemSelected = state.products.filter((product) => product.id === action.payload)
      console.log(state.cart)
      const isRepeated = state.cart.find((product) => product.id === action.payload)
      if (isRepeated === undefined) {
        return itemSelected ? { ...state, cart: [...state.cart, { ...itemSelected[0], quantity: 1 }] } : state
      } else {
        return { ...state, cart: state.cart.map((product) => product.id === action.payload ? { ...product, quantity: product.quantity++ } : product) }
      }
    }
    case TYPES.DELETEFROMCART:{
      // rest one quantity of the product if quantity == 0 delete that product
      const newItem = state.cart.map((product) => product.id === action.payload ? { ...product, quantity: product.quantity-- } : product)
      const filterItem = newItem.filter((product) => product.quantity !== 0)
      return { ...state, cart: filterItem }
    }
    case TYPES.CHANGECATEGORY:{
      if (action.payload === -1) { return { ...state, productsByCategory: state.products, categoryName: 'All' } }
      const newCategory = state.products.filter(product => product.category === action.payload)
      let categoryName
      switch (action.payload) {
        case (1):
          categoryName = 'Pantalones'
          break
        case 2:
          categoryName = 'Remeras'
          break
        case 0:
          categoryName = 'Hoodies'
          break
      }
      return { ...state, productsByCategory: newCategory, categoryName }
    }
    default:
      return state
  }
}
