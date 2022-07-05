import { Component } from 'react'
import './App.css'
import Productos from './components/Productos'
import Layout from './components/Layout'
import Nav from './components/Nav'
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
    ]
  }

  render () {
    return (
      <div className="App">
        <Nav></Nav>
        <Layout>
          <Productos
            agregarAlCarro = {() => console.log('agregar al carro')}
            productos = {this.state.productos}
          />
        </Layout>
      </div>
    )
  }
}

export default App
