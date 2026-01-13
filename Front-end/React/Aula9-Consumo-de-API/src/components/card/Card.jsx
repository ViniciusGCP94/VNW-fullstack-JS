import S from "./card.module.scss"

const Card = (props) => {
    return (
        <article>
            <img src={props.image} alt={props.title} />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </article>
    )
}

export default Card