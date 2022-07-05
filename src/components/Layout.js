import { Component } from 'react'
import PropTypes from 'prop-types'

class Layout extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired
  }

  render () {
    return (
        <div className = "layout">
            <div className = "main-container">
                {this.props.children}
            </div>
        </div>)
  }
}

export default Layout
