import React from 'react'
import Produto from './Produto';
import Utils from './Utils'

const Produtos = ({lista}) => {
  return (
    <div>
      <h1>Produtos</h1>
      { lista.map(({nome, propriedades}, pk) => <Produto nome={nome} propriedades={propriedades} key={Utils.generateKey(nome, pk)} />) }
    </div>
  )
}

export default Produtos