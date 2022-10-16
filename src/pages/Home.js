import Button from '../components/Button'
import HomeTitle from '../components/HomeTitle'
import ordenService from '../services/ordenes'
import PropTypes from 'prop-types'

const Home = () => {
  const crearOrden = async () => {
    try {
      const info = JSON.parse(window.localStorage.getItem('userEcommerce'))
      console.log(info)
      const { token } = info
      await ordenService.createOrden(token)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className = "main">
        <HomeTitle></HomeTitle>
        <div className = "menu-image">
        <Button onClick = {crearOrden}>Crear ordenhoala</Button>
        </div>
    </div>
  )
}

Home.propTypes = {
  token: PropTypes.string
}

export default Home
