import React, { useEffect, useState } from 'react'

export const API = () => {
  const [long, setLong] = useState('')
  const [short, setShort] = useState('')

  const factFromApi = () => {
    return fetch('https://catfact.ninja/fact')
      .then(res => res.json())
      .then(data => data.fact)
  }

  const giphAPI = (string) => {
    return fetch('https://catfact.ninja/fact')
      .then(res => res.json())
      .then(data => data.fact)
  }
  const firstRender = () => {
    factFromApi()
      .then(data => setLong(data))
    giphAPI()
      .then(data => setShort(data))
  }

  useEffect(firstRender, [])
  return (
    <div>{short + 'nashee' + long}</div>
  )
}
