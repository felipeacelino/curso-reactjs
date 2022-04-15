import React from 'react'
import Utils from './Utils'

const prodStyle = {
  border: '1px solid #ccc',
  padding: '10px 20px',
  marginBottom: '20px',
}

const Produto = ({nome, propriedades}) => {
  return (
    <div style={prodStyle}>
      <h3>{nome}</h3>
      <ul>
        { propriedades.map((propriedade, propK) => <li key={Utils.generateKey(propriedade, propK)}>{propriedade}</li>) }
      </ul>
    </div>
  )
}

export default Produto