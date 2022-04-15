import React from "react";
import useFetch from "./useFetch";

const App = () => {
  const { request, data, loading, error } = useFetch();

  async function fetchProdutos() {
    const { response, json } = await request(
      "https://ranekapi.origamid.dev/json/api/produto/"
    );
    console.log(response, json);
  }

  React.useEffect(() => {
    fetchProdutos();
  }, [request]);

  return (
    <div>
      <h1>Produtos</h1>
      <p>
        <button onClick={fetchProdutos} disabled={loading}>
          {!loading ? "Carregar produtos" : "Carregando..."}
        </button>
      </p>
      {error && <p>Erro: {error}</p>}
      {!error && !loading && data && (
        <ul>
          {data.map((item) => {
            return <li key={item.id}>{item.nome}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default App;
