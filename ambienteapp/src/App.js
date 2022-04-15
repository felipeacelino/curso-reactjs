import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./Ex12.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img
          src="https://lojaintegrada.com.br/new-assets/img/store.png"
          alt="Minha Loja"
        />
      </Link>
      <Menu />
    </header>
  );
};

const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li>
          <Link to="/">Produtos</Link>
        </li>
        <li>
          <Link to="contato">Contato</Link>
        </li>
      </ul>
    </nav>
  );
};

const Topo = (props) => {
  React.useEffect(() => {
    document.title = props.title;
  }, [props]);

  return (
    <div className="topo">
      <h1 className="titulo">{props.title}</h1>
    </div>
  );
};

const ListaProdutos = () => {
  return (
    <>
      <Topo title="Minha Loja" />
      <ul className="produtos">
        <li>
          <Link to="produto/1">
            <img
              src="https://images.tcdn.com.br/img/img_prod/497460/camiseta_o_grito_282_3_20190314163301.jpeg"
              alt="Meu produto"
            />
            <h2>Produto X</h2>
            <h3>R$ 100,00</h3>
          </Link>
        </li>
        <li>
          <Link to="produto/1">
            <img
              src="https://images.tcdn.com.br/img/img_prod/497460/camiseta_o_grito_282_3_20190314163301.jpeg"
              alt="Meu produto"
            />
            <h2>Produto X</h2>
            <h3>R$ 100,00</h3>
          </Link>
        </li>
        <li>
          <Link to="produto/1">
            <img
              src="https://images.tcdn.com.br/img/img_prod/497460/camiseta_o_grito_282_3_20190314163301.jpeg"
              alt="Meu produto"
            />
            <h2>Produto X</h2>
            <h3>R$ 100,00</h3>
          </Link>
        </li>
        <li>
          <Link to="produto/1">
            <img
              src="https://images.tcdn.com.br/img/img_prod/497460/camiseta_o_grito_282_3_20190314163301.jpeg"
              alt="Meu produto"
            />
            <h2>Produto X</h2>
            <h3>R$ 100,00</h3>
          </Link>
        </li>
        <li>
          <Link to="produto/1">
            <img
              src="https://images.tcdn.com.br/img/img_prod/497460/camiseta_o_grito_282_3_20190314163301.jpeg"
              alt="Meu produto"
            />
            <h2>Produto X</h2>
            <h3>R$ 100,00</h3>
          </Link>
        </li>
        <li>
          <Link to="produto/1">
            <img
              src="https://images.tcdn.com.br/img/img_prod/497460/camiseta_o_grito_282_3_20190314163301.jpeg"
              alt="Meu produto"
            />
            <h2>Produto X</h2>
            <h3>R$ 100,00</h3>
          </Link>
        </li>
      </ul>
    </>
  );
};

const ProdutoDetalhe = () => {
  return (
    <>
      <Topo title="Produto X" />
      <div className="prod-det">
        <div className="prod-det-img">
          <img
            src="https://images.tcdn.com.br/img/img_prod/497460/camiseta_o_grito_282_3_20190314163301.jpeg"
            alt="Meu produto"
          />
        </div>
        <div className="prod-det-infos">
          <h2>Produto X</h2>
          <div className="prod-det-preco">R$ 2000</div>
          <div className="prod-det-btn">
            <button>Comprar</button>
          </div>
          <div className="prod-det-desc">
            dksj lksadkl jdaslkjlkas lasjdlkaskld jasklp jdklpasjidasjildjiaosu
            doasojdasopi oasdopdas.
          </div>
        </div>
      </div>
    </>
  );
};

const Contato = () => {
  return (
    <>
      <Topo title="Contato" />
      <form className="form">
        <p>Preencha o formulário abaixo:</p>
        <div className="form-input">
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" />
        </div>
        <div className="form-input">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" />
        </div>
        <div className="form-input">
          <label htmlFor="telefone">Telefone</label>
          <input type="tel" id="telefone" />
        </div>
        <div className="form-input">
          <label htmlFor="mensagem">Mensagem</label>
          <textarea id="mensagem"></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>{" "}
    </>
  );
};

const Footer = () => {
  return <footer className="footer">2022- Todos os direitos reservados</footer>;
};

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="content">
          <Header />
          <Routes>
            <Route path="/" element={<ListaProdutos />} />
            <Route path="produto/:id" element={<ProdutoDetalhe />} />
            <Route path="contato" element={<Contato />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
