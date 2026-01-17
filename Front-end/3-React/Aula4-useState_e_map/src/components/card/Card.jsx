import s from './card.module.scss';

const Card = (props) => {
    return(
        <article className={s.article}>
            <img src={props.imagem} alt={`Imagem de ${props.nome}`} />
            <h2>{props.nome}</h2>
            <a href={props.linkedIn}></a>
        </article>
    )
}

export default Card;