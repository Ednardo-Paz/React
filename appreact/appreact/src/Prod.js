import React from 'react'
import Produt from './Produt';
import Titulo from './Titulo'

const Prod = () => {
  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ];
  return (
    <div>
      <Titulo texto="Produtos"/>
      {produtos.map((item) => (
        <Produt key={item.nome} {...item}/>
      ))}
    </div>
  )
}

export default Prod
