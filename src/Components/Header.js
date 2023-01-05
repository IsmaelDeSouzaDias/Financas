import "./Assets/CSS/Header.css";
import logo from "./Assets/Images/logo.png";
import Cadastro from "./Cadastro";
import Entrada from "./Entrada";
import Saida from "./Saida";
import Geral from "./Geral";
import React, { useState } from "react";

function Header() {
  const [componentToShow, setComponentToShow] = useState("cadastro");

  return (
    <div className="Header">
      <header className="cabecalho">
        <div>
          <img className="logo" src={logo} alt="" />
        </div>
        <nav className="menu">
          {/* Adicione um evento de clique nos links para atualizar o estado */}
          <a
            className="cadastro"
            onClick={() => setComponentToShow("cadastro")}
          >
            Cadastro
          </a>
          <a className="entrada" onClick={() => setComponentToShow("entrada")}>
            Entrada
          </a>
          <a className="saida" onClick={() => setComponentToShow("saida")}>
            Saída
          </a>
          <a
            title="Total"
            className="geral"
            onClick={() => setComponentToShow("geral")}
          >
            Geral
          </a>
        </nav>
      </header>
      {componentToShow === "cadastro" && <Cadastro />}
      {componentToShow === "entrada" && <Entrada />}
      {componentToShow === "saida" && <Saida />}
      {componentToShow === "geral" && <Geral />}
    </div>
  );
}

export default Header;
