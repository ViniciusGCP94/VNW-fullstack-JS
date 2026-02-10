import S from "./EventosEP.module.scss";
import Card from "../../components/Card/Card";
import { eventosData } from "../../data/eventosData";

function EventosEP() {
  return (
    <main className={S.eventosEPContainer}>
      <section className={S.eventosEPHeader}>
        <h1>Eventos e Palestras</h1>
      </section>

      <section className={S.cardsGrid}>
        {eventosData.map((item) => (
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

export default EventosEP;
