import s from "./main.module.scss";


export default function Main() {
    return(
        <main className={s.main}>
            <h1>Componentes de Função</h1>
            <p>São elementos independentes criados com funções que retorno um jsx e são exportados para compor o projeto</p>
        </main>
    )
}