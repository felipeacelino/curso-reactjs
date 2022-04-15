import React from "react";

const perguntas = [
  {
    pergunta: "Qual método é utilizado para criar componentes?",
    options: [
      "React.makeComponent()",
      "React.createComponent()",
      "React.createElement()",
    ],
    resposta: "React.createElement()",
    id: "p1",
  },
  {
    pergunta: "Como importamos um componente externo?",
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: "p2",
  },
  {
    pergunta: "Qual hook não é nativo?",
    options: ["useEffect()", "useFetch()", "useCallback()"],
    resposta: "useFetch()",
    id: "p3",
  },
  {
    pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
    options: ["set", "get", "use"],
    resposta: "use",
    id: "p4",
  },
];

const Alternativa = ({ pergunta, option, setValor, checked }) => {
  function handleChange({ target }) {
    setValor(target.value);
  }
  return (
    <p>
      <label>
        <input
          type="radio"
          name={pergunta}
          value={option}
          onChange={handleChange}
          defaultChecked={checked}
        />
        {option}
      </label>
    </p>
  );
};

const Pergunta = ({
  id,
  pergunta,
  resposta,
  options,
  setPergunta,
  setAcertos,
  gabarito,
  setGabarito,
}) => {
  const [valor, setValor] = React.useState(null);
  const ultima = perguntas[perguntas.length - 1].id === id;
  const ant = perguntas.filter((pItem) => pItem.id === getAntPerguntaID(id));
  const prox = perguntas.filter((pItem) => pItem.id === getProxPerguntaID(id));

  React.useEffect(() => {
    let correta = false;
    if (valor === resposta) {
      correta = true;
    }
    if (valor) {
      setGabarito((gabarito) => {
        gabarito[id].resposta = valor;
        gabarito[id].correta = correta;
        return gabarito;
      });
    }
    if (correta) {
      setAcertos((acertos) => acertos + 1);
    }
  }, [valor]);

  function getAntPerguntaID(curId) {
    return "p" + (Number(curId.replace(/\D/g, "")) - 1);
  }

  function getProxPerguntaID() {
    return "p" + (Number(id.replace(/\D/g, "")) + 1);
  }

  function handleAnt() {
    if (ant.length > 0) {
      setPergunta(ant[0]);
      setValor(null);
    }
  }

  function handleProx() {
    if (prox.length > 0) {
      setPergunta(prox[0]);
      setValor(null);
    } else {
      setPergunta(null);
    }
  }

  function respondida(optVal) {
    return gabarito[id].resposta === optVal;
  }

  return (
    <div>
      <h3>{pergunta}</h3>
      {options.map((option) => {
        return (
          <Alternativa
            key={option}
            pergunta={id}
            option={option}
            setValor={setValor}
            checked={respondida(option)}
          />
        );
      })}
      {ant.length > 0 && (
        <button onClick={handleAnt} style={{ marginRight: "1rem" }}>
          {"< Anterior"}
        </button>
      )}
      <button onClick={handleProx} disabled={!valor && !gabarito[id].resposta}>
        {!ultima ? "Próxima >" : "Ver resultado"}
      </button>
    </div>
  );
};

const gabaritoLista = () =>
  perguntas.reduce((acc, pItem) => {
    return {
      ...acc,
      [pItem.id]: {
        resposta: null,
        correta: false,
      },
    };
  }, {});

const App = () => {
  const [pergunta, setPergunta] = React.useState(perguntas[0]);
  const [acertos, setAcertos] = React.useState(0);
  const [gabarito, setGabarito] = React.useState(gabaritoLista());

  function refazerTeste() {
    setPergunta(perguntas[0]);
    setAcertos(0);
    setGabarito(gabaritoLista());
  }

  return (
    <div>
      <h1>Questionário</h1>
      {pergunta ? (
        <Pergunta
          setPergunta={setPergunta}
          setAcertos={setAcertos}
          gabarito={gabarito}
          setGabarito={setGabarito}
          {...pergunta}
        />
      ) : (
        <div>
          <h2>Resultado</h2>
          <p>
            Você acertou <b>{acertos}</b> de <b>{perguntas.length}</b>{" "}
            perguntas...
          </p>
          <table width="100%" border="1" cellSpacing="0" cellPadding="5">
            <thead>
              <tr>
                <th>Pergunta</th>
                <th>Resposta</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(gabarito).map((gKey) => {
                return (
                  <tr key={"result-" + gKey}>
                    <td>
                      {
                        perguntas.filter((pItem) => pItem.id === gKey)[0]
                          .pergunta
                      }
                    </td>
                    <td>{gabarito[gKey].resposta}</td>
                    <td
                      style={{
                        fontWeight: "bold",
                        color: gabarito[gKey].correta ? "green" : "red",
                      }}
                    >
                      {gabarito[gKey].correta ? "Correta" : "Incorreta"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button style={{ marginTop: "1rem" }} onClick={refazerTeste}>
            Refazer o teste
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
