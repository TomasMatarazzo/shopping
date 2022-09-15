import Layout from '../components/Layout'
import Productos from './Menu/Productos'
import PropTypes from 'prop-types'
import Options from './Menu/Options'

const Menu = ({ productos, agregarAlCarro, changeCategory, categoryName, token }) => {
  return (
            <Layout>
                <Options changeCategory = {changeCategory} categoryName = {categoryName}></Options>
                <Productos productos = {productos} agregarAlCarro = {agregarAlCarro} token = {token} ></Productos>
            </Layout>
  )
}

Menu.propTypes = {
  productos: PropTypes.array,
  agregarAlCarro: PropTypes.func,
  changeCategory: PropTypes.func,
  categoryName: PropTypes.string,
  token: PropTypes.string
}

export default Menu
