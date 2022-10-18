import React from 'react'

export const TextForm = () => {
  return (
    <div>
          <h2>Ranking de palabras por texto</h2>

          <h3>Selecciona el texto  que deseas encontrar: </h3>
          <form>
            <input type='number' placeholder='ID de texto'/>
            <input type='button' value='Ver ranking'></input>
          </form>
       </div>

  )
}
