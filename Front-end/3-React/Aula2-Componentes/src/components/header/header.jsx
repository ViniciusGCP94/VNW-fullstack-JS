import s from "./header.module.scss";


function Header() {
    return(
    <header className={s.header}>
      <img src="https://cdn.worldvectorlogo.com/logos/react-1.svg" alt="logo do React" />

      <ul>
        <li>Home</li>
        <li>Sobre</li>
        <li>Contato</li>
      </ul>
    </header>
    )
}

export default Header;