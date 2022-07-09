import { Component } from 'react'
import './App.css'
import Productos from './components/Productos'
// import Button from './components/Button'
import Layout from './components/Layout'
import Nav from './components/Nav'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'

// import Button from './components/Button'

class App extends Component {
  state = {
    productos: [
      { name: 'Tomate', price: 2500, img: '/productos/2.webp' },
      { name: 'Arbejas', price: 1500, img: '/productos/1.webp' },
      { name: 'Lechuga', price: 1700, img: '/productos/3.webp' },
      { name: 'Lechuga', price: 1700, img: '/productos/1.webp' },
      { name: 'Tomate', price: 2500, img: '/productos/2.webp' },
      { name: 'Arbejas', price: 1500, img: '/productos/1.webp' },
      { name: 'Lechuga', price: 1700, img: '/productos/3.webp' },
      { name: 'Lechuga', price: 1700, img: '/productos/1.webp' }
    ],
    cart: []
  }

  // Function that adds to the card the element if the element is already in the
  // cart we add the quantity of it.

  // CHANGE THIS FUNCTION FOR SET REDUCER :)
  addToCart = (product) => {
    if (this.state.cart.find((x) => x.name === product.name)) {
      const newCart = this.state.cart.map(x => x.name === product.name ? ({ ...product, cant: x.cant + 1 }) : x)
      console.log(newCart)
      return this.setState({ cart: newCart })
    }
    return this.setState(
      previousState => ({
        cart: this.state.cart.concat({ ...product, cant: 1 })
      }))
  }

  addTOcart = () => {}
  render () {
    return (
        <div className="App">
          <BrowserRouter>
            <Nav></Nav>
            <Layout>
              <Routes>
                <Route path = "/" element = { <Productos productos = {this.state.productos} agregarAlCarro = {this.addToCart}/>}/>
                <Route path = "/products" element = { <Home/>}/>
              </Routes>
            </Layout>
          </BrowserRouter>
        </div>
    )
  }
}

export default App
