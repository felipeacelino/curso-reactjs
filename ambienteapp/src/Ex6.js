import React from 'react'

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

const Produto = ({produto}) => {

  const [dados, setDados] = React.useState(null);

  async function fetchProduto(produto) {
    const resp = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`);
    const json = await resp.json();
    setDados(json);
  }

  React.useEffect(() => {
    if (produto) {
      fetchProduto(produto); 
    }
  }, [produto]);

  if (dados) {
    return (
      <div>
        <h1>{dados.nome}</h1>
        <p>R$ {dados.preco}</p>
      </div>
    )
  }

  return null;
}

const App = () => {

  const [produto, setProduto] = React.useState(false);

  const handleClick = ({target}) => {
    setProduto(target.innerText);
  }

  React.useEffect(() => {
    if (produto) {
      window.localStorage.setItem('produto', produto);
    }
  }, [produto]);

  React.useEffect(() => {
    const prodPref = window.localStorage.getItem('produto');
    if (prodPref) {
      setProduto(prodPref);
    }
  }, []);

  return (
    <div>
      <h1>Preferência: {produto}</h1>
      <button onClick={handleClick} style={{ marginRight: '1rem' }}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
      <Produto produto={produto} />
    </div>
  )
}

export default App