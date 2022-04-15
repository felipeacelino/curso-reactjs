import React from 'react'

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

const Button = ({text, loading, setLoading, setProduto}) => {
  async function fetchProduto() {
    setLoading(true);
    const url = "https://ranekapi.origamid.dev/json/api/produto/" + text.toLowerCase()
    const resp = await fetch(url);
    const produto = await resp.json();
    setLoading(false);
    setProduto(produto);
  }
  return (
    <button style={{ marginRight: '1em' }} disabled={loading} onClick={fetchProduto}>{text}</button>
  )
}

const Produto = ({produto, loading}) => {
  if (loading) {
    return <p>Carregando...</p>
  }
  if (produto !== null) {
    const foto = produto.fotos[0];
    const preco = Number(produto.preco).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    return (
      <div>
        <h1>{produto.nome}</h1>
        <p>{preco}</p>
        <img src={foto.src} alt={foto.titulo} />
      </div>
    )
  }
  return null
}

const App = () => {
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  return (
    <div>
      <Button text="Notebook" loading={loading} setLoading={setLoading} setProduto={setProduto} />
      <Button text="Smartphone" loading={loading} setLoading={setLoading} setProduto={setProduto} />
      <Button text="Tablet" loading={loading} setLoading={setLoading} setProduto={setProduto} />
      { !loading ? <Produto produto={produto} /> : <p>Carregando...</p> }
    </div>
  )
}

export default App