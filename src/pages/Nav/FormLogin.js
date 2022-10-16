import React from 'react'
import Button from '../../components/Button'
import PropTypes from 'prop-types'

const FormLogin = ({ loginUser, email, newEmail, password, newPassword }) => {
  return (
    <form onSubmit = {loginUser}>
        <h3>Correo electronico</h3>
        <input type = "text" value = {email} onChange = {newEmail}></input>
        <h3>Contraseña</h3>
        <input type = "text" value = {password} onChange = {newPassword}></input>
        <Button> Enter </Button>
    </form>
  )
}

FormLogin.propTypes = {
  loginUser: PropTypes.func,
  email: PropTypes.string,
  newEmail: PropTypes.func,
  password: PropTypes.string,
  newPassword: PropTypes.func
}

export default FormLogin
