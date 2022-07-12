import Layout from '../components/Layout'
import Productos from './Menu/Productos'
import PropTypes from 'prop-types'
import Options from './Menu/Options'

const Menu = ({ productos, agregarAlCarro }) => {
  return (
            <Layout>
                <Options></Options>
                <Productos productos = {productos} agregarAlCarro = {agregarAlCarro}></Productos>
            </Layout>
  )
}

Menu.propTypes = {
  productos: PropTypes.array,
  agregarAlCarro: PropTypes.func
}

export default Menu
