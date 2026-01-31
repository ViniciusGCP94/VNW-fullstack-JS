import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import S from "./header.module.scss";
import { useState } from "react";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <>
      <header className={S.header}>
        <section>
          <Link to="/">
            <img
              className={S.imgLogo}
              src={Logo}
              alt="Imagem de logo do site sendo representada por uma mão segurando um coração, simbolizando apoio"
            />
          </Link>
        </section>
        <nav className={S.nav}>
          <Link className={S.link} to="/doacao">
            Doação
          </Link>
          <Link className={S.link} to="/voluntariado">
            Voluntariado
          </Link>
          <Link className={S.link} to="/mentoria">
            Mentorias
          </Link>
          <Link className={S.link} to="/eventosEP">
            Eventos
          </Link>
        </nav>
        <img
          className={S.imgUser}
          src="https://avatars.githubusercontent.com/u/118212495?v=4"
          alt=""
          onClick={() => setMenuAberto(!menuAberto)}
        />
      </header>
      <nav className={menuAberto ? S.navUser : S.closedNav}>
        <Link to={"/usuario"}>Vincius Bispo</Link>
        <Link>Meu Voluntariado</Link>
        <Link>Configurações de conta</Link>
        <Link>Sair</Link>
      </nav>
    </>
  );
}
