import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
// import authService from '../../services/auth'
import PropTypes from 'prop-types'
import authService from '../../services/auth'
import FormLogin from './FormLogin'
import { Signup } from './Signup'

const MainContainer = styled.div`
    display: flex;
    flex-direction:column;
    width: 50%;
    height: ${props => (props.newUser ? ' calc(70vh - 130px)' : 'calc(100vh + 40px)')} ;
    align-items:center;
    margin-top:40px;
    border:1px solid #e1e1e1;
    padding-top:10px;

    form{
        display:flex;
        flex-direction:column;
        width:90%;
        align-items:center;
    }

    h2{
      font-size:1.4rem;
    }
    
    h2,h3{
      font-weight:500;
      align-self:baseline;
    }
    input{
      align-items:flex-start;
      border: 1px solid black;
      background-color: white;
      outline: 0;
      border-radius: black;
      width: 100%;
      color: var(--et_dark-2-white);
      font-size: 1.14rem;
      -webkit-box-shadow: none;
      box-shadow: none;
      text-align: start;
      margin:10px
    }

  .subtitle1 , .subtitle2{
    font-weight:500;
    margin-bottom:10px;
    align-self:baseline;
    margin-top:15px;
    margin-bottom:10px;
    border-bottom:2px solid gray;
    cursor:pointer;
  }

  .subtitle1{
    padding-right:40px;
  }
  .subtitle2{
    padding-left:30px;
  }
  .subtitle1:hover ,.subtitle2:hover{
    border-bottom:2px solid black;
  }
`

const FlexBox = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    width:260px;
    margin-top:10px;
    padding-bottom:10px;

    svg{
      margin: 10px;
    }
    a{
        text-decoration:none;
        color:black;
    }
`

const Layout2 = styled.div`
    display: flex;
    justify-content: center;
    padding: 20vh 50px 100px 30px;
    background-color: #FFFFFF;
`

const Title = styled.h3`
    border-bottom:3px solid black;
    align-self:center !important;
`

export const Account = ({ setInfo, setUser, setCart, setToken }) => {
  const [newUser, setNewUser] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const loginUser = async (event) => {
    event.preventDefault()
    try {
      const response = await authService.login({ email, password })
      const { token, user } = response
      console.log(token, user)
      setCart(user.cart)
      setInfo({ email: user.email, direccion: user.direccion, edad: user.edad, nombre: user.nombre, numero: user.numero })
      setUser()
      const newToken = `bearer ${token}`
      window.localStorage.setItem(
        'userEcommerce', JSON.stringify({ email: user.email, direccion: user.direccion, edad: user.edad, nombre: user.nombre, numero: user.numero, token: newToken, cart: user.cart })
      )
      navigate('/info')
    } catch (e) {
      console.log(e)
    }
  }
  const newEmail = ({ target }) => {
    setEmail(target.value)
  }
  const newPassword = ({ target }) => {
    setPassword(target.value)
  }
  const changeToLogin = () => {
    setNewUser(true)
  }

  return (
        <Layout2>
            <MainContainer newUser = {newUser} >
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path d="M16.848 12.168c1.56-1.32 2.448-3.216 2.448-5.232 0-3.768-3.072-6.84-6.84-6.84s-6.864 3.072-6.864 6.84c0 2.016 0.888 3.912 2.448 5.232-4.080 1.752-6.792 6.216-6.792 11.136 0 0.36 0.288 0.672 0.672 0.672h21.072c0.36 0 0.672-0.288 0.672-0.672-0.024-4.92-2.76-9.384-6.816-11.136zM12.432 1.44c3.048 0 5.52 2.472 5.52 5.52 0 1.968-1.056 3.792-2.76 4.776l-0.048 0.024c0 0 0 0-0.024 0-0.048 0.024-0.096 0.048-0.144 0.096h-0.024c-0.792 0.408-1.632 0.624-2.544 0.624-3.048 0-5.52-2.472-5.52-5.52s2.52-5.52 5.544-5.52zM9.408 13.056c0.96 0.48 1.968 0.72 3.024 0.72s2.064-0.24 3.024-0.72c3.768 1.176 6.576 5.088 6.816 9.552h-19.68c0.264-4.44 3.048-8.376 6.816-9.552z"></path></svg>
                <Title>Mi cuenta</Title>
                <FlexBox>
                    <h2 className='subtitle1' onClick={() => setNewUser(true)}>Ingresar</h2>
                    <h2 className='subtitle2' onClick={() => setNewUser(false)}>Registrarme</h2>
                </FlexBox>
                { newUser
                  ? <FormLogin password = {password} email = {email} newPassword = {newPassword} newEmail = {newEmail} loginUser = {loginUser}></FormLogin>
                  : <Signup changeToLogin = {changeToLogin}></Signup>}
            </MainContainer>
        </Layout2>
  )
}

Account.propTypes = {
  setInfo: PropTypes.func,
  setUser: PropTypes.func,
  setCart: PropTypes.func,
  setToken: PropTypes.func
}

export default Account
