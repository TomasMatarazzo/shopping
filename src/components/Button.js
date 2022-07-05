import { Component } from 'react'

class Button extends Component {
  render () {
    return (<button {...this.props} className = "producto__button"/>)
  }
}

export default Button
