import Layout from '../components/Layout'
import Productos from '../components/Productos'
import PropTypes from 'prop-types'
import Options from '../components/Options'

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
