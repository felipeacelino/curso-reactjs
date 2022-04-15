import React from "react";

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const Ex1 = () => {
  const dados = luana;
  const totalGasto = dados.compras.reduce((total, compra) => total + parseFloat(compra.preco.replace('R$ ', '')), 0);
  const situacao = dados.ativa ? 'Ativa' : 'Inativa';
  const situacaoColor = dados.ativa ? 'green' : 'red';
  return <div>
    <p><b>Nome:</b> {dados.cliente}</p>
    <p><b>Idade:</b> {dados.idade}</p>
    <p><b>Situação:</b> <span style={{ color: situacaoColor }}>{situacao}</span></p>
    <p><b>Total gasto:</b> R$ {totalGasto}</p>
    { totalGasto > 10000 && <p>Você está gastando muito!</p> }
  </div>;
};

export default Ex1;
