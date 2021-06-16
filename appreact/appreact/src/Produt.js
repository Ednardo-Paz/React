import React from 'react'

const Produt = ({nome, propriedades}) => {
  return (
    <div style={{border: '1px solid ', margin: '10px', padding: '1rem'}}>
      <p>{nome}</p>
      <ul>
         {propriedades.map((propriedade) => (
           <li>{propriedade}</li>
         ))}
      </ul>
    </div>
  )
}

export default Produt
