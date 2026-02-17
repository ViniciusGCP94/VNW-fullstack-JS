import S from "./Mentoria.module.scss";
import Card from "../../components/Card/Card";
import { mentoriaData } from "../../data/mentoriaData";

function Mentoria() {
  return (
    <main className={S.mentoriaContainer}>
      <section className={S.mentoriaHeader}>
        <h1>Mentoria</h1>
      </section>

      <section className={S.cardsGrid}>
        {mentoriaData.map((item) => (
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

export default Mentoria;
