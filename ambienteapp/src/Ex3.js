import React from 'react'
import Menu from './Ex3/Menu';
import Home from './Ex3/Home';
import Produtos from './Ex3/Produtos';

// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)
const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

const { pathname } = window.location;

const App = () => {
  return (
    <div>
      <Menu />
      { pathname === '/produtos' ? <Produtos lista={produtos} /> : <Home /> }
    </div>
  )
}

export default App