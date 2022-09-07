import React, { useState } from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import authService from '../services/auth'

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

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginUser = async (event) => {
    event.preventDefault()
    await authService.login({ email, password })
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
