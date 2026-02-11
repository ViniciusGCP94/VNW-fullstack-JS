import S from "./home.module.scss";
import Button from "../../components/button/Button.jsx";
import StatItem from "../../components/stats/StatsInfo.jsx";

export default function Home() {
  return (
    <section className={S.home}>
      <div className={S.contentContainer}>
        <h1 className={S.titleHome}>Projetos Sociais que transformam</h1>
        <p className={S.description}>Conectamos sua empresa com projetos sociais impactantes. Juntos, criamos mudanças reais na comunidade.</p>
        <Button variant="orange">Cadastrar Empresa → </Button>
        <div className={S.statsContainer}>
          <StatItem quantity="500+" label="Empresas Voluntárias" />
          <StatItem quantity="1.2K+" label="Projetos Realizados" />
          <StatItem quantity="50K+" label="Vidas Impactadas" />
        </div>
      </div>
      <div className={S.imageContainer}>
        <img className={S.heroImage} src="/images/home-image.png" alt="Hero Image" />
      </div> 
    </section>

  );
}
