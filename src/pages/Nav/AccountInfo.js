import React, { useEffect } from 'react'
import Layout from '../../components/Layout'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Button from '../../components/Button'

const MainContainer = styled.div`
    display: flex;
    flex-direction:row;
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

const Info = styled.div`
    width:75%;
    height:100%;
    border-right: 1px solid #E1E1E1;
`

const LeftMenu = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width: 25%;
    height:100%;
    border-right: 1px solid #000000;
    padding-left:0px;
`

const Ul = styled.ul`
  padding-left: 0;
  padding-right: 0;
  margin-bottom: 0;
  margin-top:20px;

  li{
    list-style:none;
    padding: 7px 0px;
    font-size:1.14rem;
    text-align:left;
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
              <LeftMenu>
                  <div className = "avatar-img"></div>
                  <h3>{email}</h3>
                  <p>{nombre}</p>
                  <Ul >
                   <li onClick = { () => console.log('nashe')}>All</li>
                   <li onClick = { () => console.log('nashe')}>Hoodies</li>
                   <li onClick = { () => console.log('nashe')}>Remeras</li>
                   <li onClick = { () => console.log('nashe')}>Camperas</li>
                  </Ul>
              </LeftMenu>
              <Info>
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
              </Info>

            </MainContainer>
        </Layout>
  )
}

AccountInfo.propTypes = {
  info: PropTypes.object,
  logout: PropTypes.func

}
