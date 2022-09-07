import React, { useEffect } from 'react'
import Layout from '../../components/Layout'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Button from '../../components/Button'

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
        margin-top:5px;
        width:100px;
        height:50px
    }
`

export const AccountInfo = ({ info, logout }) => {
  const { nombre, email, direccion, edad, numero } = info
  useEffect(() => {
    console.log(nombre)
  }, [])
  return (
       <Layout>
            <MainContainer >
                <h3>Nombre</h3>
                <p>{nombre}</p>
                <h3>Email</h3>
                <p>{email}</p>
                <h3>Direccion</h3>
                <p>{direccion}</p>
                <h3>Edad</h3>
                <p>{edad}</p>
                <h3>Numero</h3>
                <p>{numero}</p>
                <Button onClick = {logout}>Loguout</Button>
            </MainContainer>
        </Layout>
  )
}

AccountInfo.propTypes = {
  info: PropTypes.object,
  logout: PropTypes.func

}
