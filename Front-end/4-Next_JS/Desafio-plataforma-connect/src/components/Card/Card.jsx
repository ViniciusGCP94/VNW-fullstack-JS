import S from "./Card.module.scss";
import Button from "../Button/Button"; // Reutilizando seu botão já pronto

function Card({ image, title, description, buttonText }) {
  return (
    <div className={S.cardContainer}>
      <img src={image} alt={title} className={S.cardImage} />
      <div className={S.cardContent}>
        <h3 className={S.cardTitle}>{title}</h3>
        <p className={S.cardDescription}>{description}</p>
        <Button text={buttonText} /> 
      </div>
    </div>
  );
}

export default Card;