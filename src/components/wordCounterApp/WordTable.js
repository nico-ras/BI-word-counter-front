import React from 'react'

export const WordTable = ({element: { word, position, occurrences }}) => {
 
  return (
    <>
           <tr>
           <td>{position}</td>
           <td>'{word}'</td>
           <td>{occurrences}</td>
          </tr> 
    </>
  )
}


