import React from 'react'

export const WorldCounterApp = () => {
  return (
    <>
       <h1>WorldCounterApp</h1>

       <div>
          <h2>Ranking de palabras por texto</h2>

          <h3>Selecciona el texto  que deseas encontrar: </h3>
          <form>
            <input type='number' placeholder='ID de texto'/>
          </form>
       </div>

    </>
  )
}
