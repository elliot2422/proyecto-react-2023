import { useEffect, useState } from 'react'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL


function App() {

  const [criptos, setCriptos] = useState()

  useEffect(() => {
    axios.get(`${API_URL}assets`)
      .then((data) => {
        console.log(data)
        setCriptos(data.data.data)
      })
      .catch(() => {
        console.error("La peticion fallo")
      })
  }, []) 

  if (!criptos) return <span> Cargando...</span>

  return (
    <>
      <h1>Lista de criptos</h1>
      <ol>
        { criptos.map(({id, name, priceUsd}) => ( 
          <li key={id}>Nombre: {name} Precio: {priceUsd}</li>
        ))}
      </ol>
    </>


  )
}

export default App
