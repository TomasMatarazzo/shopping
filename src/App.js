import { useReducer, useEffect, useState } from 'react'
import './App.css'
// import Button from './components/Button'
import Nav from './pages/Nav'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Menu from './pages/Menu'
import { Signup } from './pages/Signup'
import { Login } from './pages/Login'
import { TYPES } from './state/actions/types.js'

// import Button from './components/Button'
const initialState = {
  products: [
    { name: 'Tomate', price: 2500, img: '/productos/2.webp', id: 1, category: 1 },
    { name: 'Arbejas', price: 1500, img: '/productos/1.webp', id: 2, category: 2 },
    { name: 'Lechuga', price: 1700, img: '/productos/3.webp', id: 3, category: 2 },
    { name: 'Lechuga', price: 1700, img: '/productos/1.webp', id: 4, category: 2 },
    { name: 'Tomate', price: 2500, img: '/productos/2.webp', id: 5, category: 1 },
    { name: 'Arbejas', price: 1500, img: '/productos/1.webp', id: 6, category: 0 },
    { name: 'Lechuga', price: 1700, img: '/productos/3.webp', id: 7, category: 0 },
    { name: 'Lechuga', price: 1700, img: '/productos/1.webp', id: 8, category: 1 }
  ],
  cart: [],
  productsByCategory: [
    { name: 'Tomate', price: 2500, img: '/productos/2.webp', id: 1, category: 1 },
    { name: 'Arbejas', price: 1500, img: '/productos/1.webp', id: 2, category: 2 },
    { name: 'Lechuga', price: 1700, img: '/productos/3.webp', id: 3, category: 2 },
    { name: 'Lechuga', price: 1700, img: '/productos/1.webp', id: 4, category: 2 },
    { name: 'Tomate', price: 2500, img: '/productos/2.webp', id: 5, category: 1 },
    { name: 'Arbejas', price: 1500, img: '/productos/1.webp', id: 6, category: 0 },
    { name: 'Lechuga', price: 1700, img: '/productos/3.webp', id: 7, category: 0 },
    { name: 'Lechuga', price: 1700, img: '/productos/1.webp', id: 8, category: 1 }
  ],
  categoryName: 'All'
}

const cartReducer = (state, action) => {
  switch (action.type) {
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
const App = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  const [user, setUser] = useState(false)

  const userConnected = () => {
    setUser(null)
    console.log(user)
  }

  useEffect(userConnected, [])

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADDTOCART, payload: id })
  }

  const deleteFromCart = (id) => {
    dispatch({ type: TYPES.DELETEFROMCART, payload: id })
  }

  const changeCategory = (id) => {
    dispatch({ type: TYPES.CHANGECATEGORY, payload: id })
  }

  return (
        <div className="App">
          <BrowserRouter>
            <Nav cart = {state.cart} eliminarDelCarro = {deleteFromCart} agregarAlCarro = {addToCart}></Nav>
              <Routes>
                <Route path = "/login" element = { <Login/>}/>
                <Route path = "/products" element = { <Menu productos = {state.productsByCategory} categoryName = {state.categoryName} agregarAlCarro = {addToCart} changeCategory = {changeCategory}/>}/>
                <Route path = "/signup" element = { <Signup/>}/>
              </Routes>
          </BrowserRouter>
        </div>
  )
}

export default App
