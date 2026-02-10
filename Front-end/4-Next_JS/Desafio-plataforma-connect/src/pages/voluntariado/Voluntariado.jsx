import S from "./Voluntariado.module.scss";
import Card from "../../components/Card/Card";
import { voluntariadoData } from "../../data/voluntariadoData";

function Voluntariado() {
  return (
    <main className={S.voluntariadoContainer}>
      <section className={S.voluntariadoHeader}>
        <h1>Voluntariado</h1>
      </section>

      <section className={S.cardsGrid}>
        {voluntariadoData.map((item) => (
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

export default Voluntariado;