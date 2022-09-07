import React, { useState } from 'react'
import Layout from '../../components/Layout'
import styled from 'styled-components'
import authService from '../../services/auth'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const MainContainer = styled.div`
    display: flex;
    flex-direction:column;
    width: 100%;
    height:calc(100vh - 130px);
    align-items:center;
    margin-top:40px;


    form{
        display:flex;
        flex-direction:column;
        width:30%;
    }

    h2{
      font-size:1.4rem;
    }
    h2,h3{
      align-self:center;
      font-weight:500;
    }

    button{
        border: 0 solid black;
        border-radius: 10px;
        box-sizing: border-box;
        color: rgba(0,0,0,1.00);
        margin: 0;
        padding: 5px;
        font-weight:700;
        margin-top:20px
    }
`

export const Login = ({ setInfo, setUser, setCart, setToken }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  // Una vez hago el login obtengo toda la informacion del usuario
  const loginUser = async (event) => {
    event.preventDefault()
    try {
      const response = await authService.login({ email, password })
      const { token, user } = response
      setCart(user.cart)
      setInfo({ email: user.email, direccion: user.direccion, edad: user.edad, nombre: user.nombre, numero: user.numero })
      setUser()
      const newToken = `bearer ${token}`
      window.localStorage.setItem(
        'userEcommerce', JSON.stringify({ email: user.email, direccion: user.direccion, edad: user.edad, nombre: user.nombre, numero: user.numero, token: newToken, cart: user.cart })
      )
      navigate('/info')
    } catch (e) {
      console.log('Hubo un error')
    }
  }
  const newEmail = ({ target }) => {
    setEmail(target.value)
  }
  const newPassword = ({ target }) => {
    setPassword(target.value)
  }
  return (
        <Layout>
            <MainContainer >
                <form onSubmit = {loginUser}>
                    <h3>Correo electronico</h3>
                    <input type = "text" value = {email} onChange = {newEmail}></input>
                    <h3>Contraseña</h3>
                    <input type = "text" value = {password} onChange = {newPassword}></input>
                    <button type = "submit"> Siguiente</button>
                    <div>{email + password}</div>
                </form>
            </MainContainer>
        </Layout>
  )
}

Login.propTypes = {
  setInfo: PropTypes.func,
  setUser: PropTypes.func,
  setCart: PropTypes.func,
  setToken: PropTypes.func

}
