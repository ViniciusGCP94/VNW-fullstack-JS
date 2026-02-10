import S from "./Doacao.module.scss";
import Card from "../../components/Card/Card";
import { doacaoData } from "../../data/doacaoData";

function Doacao() {
  return (
    <main className={S.doacaoContainer}>
      <section className={S.doacaoHeader}>
        <h1>Doação</h1>
      </section>

      <section className={S.cardsGrid}>
        {doacaoData.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            buttonText={item.buttonText}
          />
        ))}
      </section>
    </main>
  );
}

export default Doacao;
