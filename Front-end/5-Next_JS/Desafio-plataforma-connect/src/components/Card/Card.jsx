import { useState } from "react";
import S from "./Card.module.scss";
import Button from "../button/button.jsx";

function Card({ id, image, title, description, buttonText, categoria }) {
  const [inscrito, setInscrito] = useState(false);

  const handleInscricao = () => {
    const inscricoes = JSON.parse(localStorage.getItem('inscricoes') || '[]');
    
    if (!inscrito) {
      inscricoes.push({
        id,
        titulo: title,
        categoria,
        dataInscricao: new Date().toISOString()
      });
      localStorage.setItem('inscricoes', JSON.stringify(inscricoes));
      setInscrito(true);
    }
  };

  return (
    <div className={S.cardContainer}>
      {inscrito && (
        <div className={S.sucessoBadge}>
          <span>✓</span> Inscrito com sucesso!
        </div>
      )}
      
      <img src={image} alt={title} className={S.cardImage} />
      
      <div className={S.cardContent}>
        <h3 className={S.cardTitle}>{title}</h3>
        <p className={S.cardDescription}>{description}</p>
        
        <Button 
          variant={inscrito ? "outline" : "primary"}
          onClick={handleInscricao}
        >
          {inscrito ? "Inscrito ✓" : buttonText}
        </Button>
      </div>
    </div>
  );
}


export default Card;
