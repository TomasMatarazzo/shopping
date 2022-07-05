import PropTypes from 'prop-types'

const Layout = ({ children }) => {
  return (
        <div className = "layout">
            <div className = "main-container">
                {children}
            </div>
        </div>)
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}
export default Layout
