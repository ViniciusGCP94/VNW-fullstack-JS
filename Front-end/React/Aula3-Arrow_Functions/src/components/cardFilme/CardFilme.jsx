import S from "./cardFilme.module.scss";

const CardFilme = (props) => {
  return (
    <article>
      <img src={props.src} alt={props.alt} />
      <h2>{props.titulo}</h2>
      <p>{props.descricao}</p>
    </article>
  );
};

export default CardFilme;
