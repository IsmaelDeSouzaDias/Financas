import "./Assets/CSS/Header.css";
import logo from "./Assets/Images/logo.png";
function Header() {
  return (
    <div className="Header">
      <header className="cabecalho">
        <div>
          <img className="logo" src={logo} alt="" />
        </div>
        <nav className="menu">
          <a className="entrada" href="/">
            Entrada
          </a>
          <a className="saida" href="/">
            Saída
          </a>
          <a title="Total" className="tudo" href="/">
            Geral
          </a>
        </nav>
      </header>
    </div>
  );
}

export default Header;
