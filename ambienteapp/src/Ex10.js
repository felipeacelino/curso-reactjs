import React from "react";

// Otimize o código do slide anterior
// Utilizando a array abaixo para mostrar
// cada checkbox na tela.

const coresArray = ["azul", "roxo", "laranja", "verde", "vermelho", "cinza"];

const Checkbox = ({ value, setCores, checked }) => {
  const ucFirst = (text) => text.charAt(0).toUpperCase() + text.slice(1);
  function handleChange({ target }) {
    if (target.checked) {
      setCores((cores) => {
        return [...cores, target.value];
      });
    } else {
      setCores((cores) => {
        return cores.filter((cor) => cor !== target.value);
      });
    }
  }
  return (
    <label>
      <input
        type="checkbox"
        value={value}
        onChange={handleChange}
        checked={checked}
      />
      {ucFirst(value)}
    </label>
  );
};

const App = () => {
  const [cores, setCores] = React.useState(["azul", "roxo"]);
  return (
    <div>
      <h1>Cores</h1>
      {coresArray.map((cor) => {
        return (
          <Checkbox
            key={cor}
            value={cor}
            setCores={setCores}
            checked={cores.includes(cor)}
          />
        );
      })}
    </div>
  );
};

export default App;
