import PropTypes from 'prop-types'

const Layout = ({ children }) => {
  return (
        <div className = "layout">
                {children}
        </div>)
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}
export default Layout
