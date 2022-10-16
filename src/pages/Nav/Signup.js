import React, { useState } from 'react'
// import styled from 'styled-components'
import authService from '../../services/auth'
import Button from '../../components/Button'
import PropTypes from 'prop-types'

// const MainContainer = styled.div`
//     display: flex;
//     flex-direction:column;
//     width: 100%;
//     align-items:center;

//     form{
//         display:flex;
//         flex-direction:column;
//         width:30%;
//     }

//     h2{
//       font-size:1.4rem;
//     }
//     h2,h3{
//       align-self:center;
//       font-weight:500;
//     }

//     button{
//         border: 0 solid black;
//         border-radius: 10px;
//         box-sizing: border-box;
//         color: rgba(0,0,0,1.00);
//         margin: 0;
//         font-weight:700;
//         margin-top:20px
//     }
// `

export const Signup = ({ changeToLogin }) => {
  const [user, setUser] = useState({ email: '', password: '', nombre: '', direccion: '', edad: '', numero: '', avatar: '' })

  const signupUser = async (event) => {
    event.preventDefault()
    try {
      await authService.signup({
        email: user.email, password: user.password, nombre: user.nombre, direccion: user.direccion, edad: user.edad, numero: user.numero
      })
      setUser({ email: '', password: '', nombre: '', direccion: '', edad: '', numero: '', avatar: '' })
      changeToLogin()
      // cartel diciendo que todo ocurrio perfectamente
    } catch (exception) {
      console.log(exception)
    }
  }
  const newUser = ({ target }) => {
    setUser({
      ...user,
      [target.name]: target.value
    })
  }

  return (
          <form onSubmit = {signupUser}>
              <h2> Unete a nuestro comercio</h2>
              <br></br>
              <h3>Correo electronico</h3>
              <input type = "text" value = {user.email} name = "email" onChange = {newUser}></input>
              <h3>Contraseña</h3>
              <input type = "password" value = {user.password} name = "password" onChange = {newUser}></input>
              <h3>Nombre</h3>
              <input type = "text" value = {user.nombre} name = "nombre" onChange = {newUser}></input>
              <h3>Direccion</h3>
              <input type = "text" value = {user.direccion} name = "direccion" onChange = {newUser}></input>
              <h3>Edad</h3>
              <input type = "text" value = {user.edad} name = "edad" onChange = {newUser}></input>
              <h3>Numero de telefono</h3>
              <input type = "text" value = {user.numero} name = "numero" onChange = {newUser}></input>
              <h3>Avatar</h3>
              <input type = "text" value = {user.avatar} name = "avatar" onChange = {newUser}></input>
              <Button> Enter </Button>
          </form>
  )
}

Signup.propTypes = {
  changeToLogin: PropTypes.func
}
