import { useReducer } from 'react'
import './App.css'
// import Button from './components/Button'
import Nav from './pages/Nav'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'
import { TYPES } from './state/actions/types.js'

// import Button from './components/Button'
const initialState = {
  products: [
    { name: 'Tomate', price: 2500, img: '/productos/2.webp', id: 1 },
    { name: 'Arbejas', price: 1500, img: '/productos/1.webp', id: 2 },
    { name: 'Lechuga', price: 1700, img: '/productos/3.webp', id: 3 },
    { name: 'Lechuga', price: 1700, img: '/productos/1.webp', id: 4 },
    { name: 'Tomate', price: 2500, img: '/productos/2.webp', id: 5 },
    { name: 'Arbejas', price: 1500, img: '/productos/1.webp', id: 6 },
    { name: 'Lechuga', price: 1700, img: '/productos/3.webp', id: 7 },
    { name: 'Lechuga', price: 1700, img: '/productos/1.webp', id: 8 }
  ],
  cart: []
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case TYPES.ADDTOCART:{
      const itemSelected = state.products.filter((product) => product.id === action.payload)
      console.log(state.cart)
      return itemSelected ? { ...state, cart: [...state.cart, itemSelected[0]] } : state
    }
    case TYPES.DELETEFROMCART:
      return state
    default:
      return state
  }
}
const App = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addToCart = (id) => {
    console.log(id)
    dispatch({ type: TYPES.ADDTOCART, payload: id })
  }

  return (
        <div className="App">
          <BrowserRouter>
            <Nav cart = {state.cart}></Nav>
              <Routes>
                <Route path = "/products" element = { <Menu productos = {state.products} agregarAlCarro = {addToCart}/>}/>
                <Route path = "/" element = { <Home/>}/>
              </Routes>
          </BrowserRouter>
        </div>
  )
}

export default App
