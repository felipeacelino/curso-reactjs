import React from "react";

// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

const Input = ({ props, value, setForm, required = false }) => {
  const { ref, type, label, id } = props;
  function handleChange({ target }) {
    const inputValue = target.value;
    setForm((form) => {
      return {
        ...form,
        [id]: inputValue,
      };
    });
  }
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label htmlFor={id} style={{ fontSize: "1rem", fontWeight: "600" }}>
        {label}
      </label>
      <input
        ref={ref}
        type={type}
        name={id}
        id={id}
        value={value}
        onChange={handleChange}
        required={required}
      />
    </div>
  );
};

const App = () => {
  const formObj = {
    nome: "",
    email: "",
    senha: "",
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
  };
  const [form, setForm] = React.useState(formObj);
  const [loading, setLoading] = React.useState(false);
  const [retorno, setRetorno] = React.useState({
    status: "",
    message: "",
  });
  const nomeRef = React.useRef();
  const emailRef = React.useRef();
  const refsObj = {
    nome: nomeRef,
    email: emailRef,
  };

  function resetForm() {
    setForm(formObj);
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    fetchForm();
  }

  React.useEffect(() => {
    if (retorno.status) {
      setTimeout(() => {
        setRetorno({
          status: "",
          message: "",
        });
      }, 3000);
    }
  }, [retorno]);

  async function fetchForm() {
    Object.keys(refsObj).forEach((item) => {
      refsObj[item].current.classList.remove("invalid");
    });
    setLoading(true);
    setRetorno({
      status: "",
      message: "",
    });
    const resp = await fetch("https://ranekapi.origamid.dev/json/api/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const json = await resp.json();
    setLoading(false);
    if (json.ID) {
      setRetorno({
        status: "success",
        message: "Usuário cadastrado com sucesso!",
      });
      resetForm();
    } else {
      refsObj[json.code].current.classList.add("invalid");
      refsObj[json.code].current.focus();
      setRetorno({
        status: "error",
        message: json.message,
      });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Formulário de cadastro</h1>
      <Input
        props={{ ref: nomeRef, type: "text", label: "Nome", id: "nome" }}
        value={form.nome}
        setForm={setForm}
        required={true}
      />
      <Input
        props={{ ref: emailRef, type: "email", label: "E-mail", id: "email" }}
        value={form.email}
        setForm={setForm}
        required={true}
      />
      <Input
        props={{ type: "password", label: "Senha", id: "senha" }}
        value={form.senha}
        setForm={setForm}
        required={true}
      />
      <Input
        props={{ type: "text", label: "CEP", id: "cep" }}
        value={form.cep}
        setForm={setForm}
        required={true}
      />
      <Input
        props={{ type: "text", label: "Endereço", id: "rua" }}
        value={form.rua}
        setForm={setForm}
        required={true}
      />
      <Input
        props={{ type: "text", label: "Número", id: "numero" }}
        value={form.numero}
        setForm={setForm}
      />
      <Input
        props={{ type: "text", label: "Bairro", id: "bairro" }}
        value={form.bairro}
        setForm={setForm}
        required={true}
      />
      <Input
        props={{ type: "text", label: "Cidade", id: "cidade" }}
        value={form.cidade}
        setForm={setForm}
        required={true}
      />
      <Input
        props={{ type: "text", label: "Estado", id: "estado" }}
        value={form.estado}
        setForm={setForm}
        required={true}
      />

      <button type="submit" style={{ marginTop: "10px" }} disabled={loading}>
        {!loading ? "Cadastrar" : "Aguarde..."}
      </button>

      {!loading && retorno.status && (
        <div
          style={{
            padding: "0.5rem 1rem",
            color: "white",
            marginTop: "1.5rem",
            backgroundColor: retorno.status === "success" ? "green" : "red",
          }}
        >
          {retorno.message}
        </div>
      )}
    </form>
  );
};

export default App;
