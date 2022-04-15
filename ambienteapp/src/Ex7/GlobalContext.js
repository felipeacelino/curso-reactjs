import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [produtos, setProdutos] = React.useState([]);

  async function fetchData() {
    const resp = await fetch("https://ranekapi.origamid.dev/json/api/produto/");
    const json = await resp.json();
    setProdutos(json);
  }

  const limparDados = () => {
    setProdutos([]);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <GlobalContext.Provider value={{ produtos, limparDados }}>
      {children}
    </GlobalContext.Provider>
  );
};
