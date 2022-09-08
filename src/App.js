import { useReducer, useEffect } from 'react'
import { useNavigate, Routes, Route } from 'react-router-dom'
import './App.css'
// import Button from './components/Button'
import Nav from './pages/Nav'
import Menu from './pages/Menu'
import { Signup } from './pages/Nav/Signup'
import { Login } from './pages/Nav/Login'
import { TYPES } from './state/actions/types.js'
import { cartReducer } from './state/reducers/cartReducer'
import Home from './pages/Home'
import { AccountInfo } from './pages/Nav/AccountInfo'

// import Button from './components/Button'
const initialState = {
  user: null,
  info: null,
  token: null,
  products: [
    { name: 'remolacha', price: 2500, img: '/productos/2.webp', id: '63160709c47f2db35b7c75dd', category: 1 },
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
    { name: 'remolacha', price: 2500, img: '/productos/2.webp', id: '63160709c47f2db35b7c75dd', category: 1 },
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

const App = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const navigate = useNavigate()

  const navigateHome = () => {
    navigate('/')
  }
  const firstRender = () => {
    const info = JSON.parse(window.localStorage.getItem('userEcommerce'))
    if (info !== null) {
      const { token, nombre, direccion, edad, numero, email, cart } = info
      setCart(cart)
      setInfo({ nombre, direccion, edad, numero, email })
      setUser()
      setToken(token)
    }
  }

  useEffect(firstRender, [])

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADDTOCART, payload: id })
  }
  const deleteFromCart = (id) => {
    dispatch({ type: TYPES.DELETEFROMCART, payload: id })
  }
  const changeCategory = (id) => {
    dispatch({ type: TYPES.CHANGECATEGORY, payload: id })
  }
  const setInfo = (info) => {
    dispatch({ type: TYPES.SETINFO, payload: info })
  }
  const setUser = () => {
    dispatch({ type: TYPES.SETUSER })
  }
  const setCart = (cart) => {
    dispatch({ type: TYPES.SETCART, payload: cart })
  }
  const setToken = (token) => {
    dispatch({ type: TYPES.SETTOKEN, payload: token })
  }
  const logout = (token) => {
    navigateHome()
    dispatch({ type: TYPES.LOGOUT })
    window.localStorage.removeItem('userEcommerce')
  }

  return (
        <div className="App">
            <Nav cart = {state.cart} eliminarDelCarro = {deleteFromCart} agregarAlCarro = {addToCart} user = {state.user} info = {state.info}></Nav>
              <Routes>
                <Route path = "/login" element = { <Login setInfo = {setInfo} setUser = {setUser} setCart = {setCart} setToken = {setToken}/>}/>
                <Route path = "/products" element = { <Menu productos = {state.productsByCategory} categoryName = {state.categoryName} agregarAlCarro = {addToCart} changeCategory = {changeCategory} token = {state.token}/>}/>
                <Route path = "/" element = {<Home></Home>}></Route>
                <Route path = "/signup" element = { <Signup/>}/>
                <Route path = "/info" element = { <AccountInfo info = {state.info} logout = {logout}/>}/>
              </Routes>
        </div>
  )
}

export default App
