import { Link } from "react-router-dom";
import S from "./header.module.scss";
import { useEffect, useState } from "react";

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    function menuMobile() {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMenuAberto(false);
      }
    }

    window.addEventListener("resize", menuMobile);
    return () => window.removeEventListener("resize", menuMobile);
  }, []);

  return (
    <>
      <header className={S.header}>
        <section>
          <Link to="/">
            <img
              className={S.imgLogo}
              src="/images/logo.png"
              alt="Imagem de logo do site sendo representada por uma mão segurando um coração, simbolizando apoio"
            />
          </Link>
        </section>
        {!isMobile && (
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
        )}
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
        {isMobile && (
          <div>
            <Link
              className={S.link}
              to="/doacao"
              onClick={() => setMenuAberto(false)}
            >
              Doação
            </Link>
            <Link
              className={S.link}
              to="/voluntariado"
              onClick={() => setMenuAberto(false)}
            >
              Voluntariado
            </Link>
            <Link
              className={S.link}
              to="/mentoria"
              onClick={() => setMenuAberto(false)}
            >
              Mentorias
            </Link>
            <Link
              className={S.link}
              to="/eventosEP"
              onClick={() => setMenuAberto(false)}
            >
              Eventos
            </Link>
          </div>
        )}

        <Link onClick={() => setMenuAberto(false)}>Sair</Link>
      </nav>
    </>
  );
}

export default Header;