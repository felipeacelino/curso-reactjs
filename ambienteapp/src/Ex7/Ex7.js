import React from "react";
import { GlobalContext, GlobalStorage } from "./GlobalContext";

// Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
// https://ranekapi.origamid.dev/json/api/produto/
// assim que o usuário acessar o app
// coloque os dados da API no contexto global, dando acesso aos dados da mesma
// defina uma função chamada limparDados que é responsável por zerar os dados de produto
// e exponha essa função no contexto global

const App = () => {
  return (
    <div>
      <GlobalStorage>
        <Produtos />
      </GlobalStorage>
    </div>
  );
};

const Produtos = () => {
  const { produtos, limparDados } = React.useContext(GlobalContext);
  return (
    <div>
      <ul>
        {produtos.map((p) => {
          return <li key={p.id}>{p.nome}</li>;
        })}
      </ul>
      <button onClick={limparDados}>Limpar produtos</button>
    </div>
  );
};

export default App;
