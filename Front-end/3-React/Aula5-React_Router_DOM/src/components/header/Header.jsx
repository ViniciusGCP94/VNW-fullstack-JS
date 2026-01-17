import { Link } from 'react-router-dom'
import s from './header.module.scss'


const Header = () => {

    return(
        <header className={s.header}>
            <nav>

                {/* É usado para criar links entre as páginas, substituindo a tag <a>, o que torna a navegação mais rápida e sem recarregar a página inteira. Observe que no atributo to deve conter o mesmo caminho que contem no atributo path em Route no App.jsx*/}
                <Link to='/'>Início</Link>
                <Link to='/projetos'>Projetos</Link>
                <Link to='/contato'>Contato</Link>
            </nav>
        </header>
    )
}

export default Header