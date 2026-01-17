import s from './footer.module.scss'
import Logo from '../../assets/logo.png'
import { LuMail , LuMapPin , LuPhone } from "react-icons/lu";

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.conteudo}>
                <div className={s.apresentacaoMarca}>
                    <div className={s.logoMarca}>
                       <img src={Logo} alt="Imagem de logo do site Médicos Voluntários" />
                       <h2>Médicos & Dentistas</h2>
                    </div>   
                    <p>Saúde e cuidado sem barreiras para toda comunidade.</p>
                </div>
                <div className={s.contato}>
                    <h3>Contato</h3>
                    <ul>
                        <li>
                            <LuMail size={22} />
                            <p>contato@medico-dentista.org</p>
                        </li>
                        <li>
                            <LuPhone size={22} />
                            <p>(11) 3000-0000</p>
                        </li>
                        <li>
                            <LuMapPin size={22} />
                            <p>São Paulo, Brasil</p>
                        </li>
                    </ul>
                </div>
                <div className={s.redesSociais}>
                    <h3>Redes Sociais</h3>
                    <ul>
                        <li>Facebook</li>
                        <li> Instagram</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
