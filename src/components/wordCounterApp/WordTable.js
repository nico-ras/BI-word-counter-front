import React from 'react'

export const WordTable = ({element, element:{position, word, occurrences}}) => {
  return (
    <>
       <tr key={element}>
        <td>{position}</td>
        <td>'{word}'</td>
        <td>{occurrences}</td>
        <td>Ver texto</td>
        <td>Editar</td>
       </tr>
    </>
  )
}


