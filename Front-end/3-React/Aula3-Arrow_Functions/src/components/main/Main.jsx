import CardFilme from "../cardFilme/CardFilme";
import S from "./main.module.scss";

const Main = () => {
  return (
    <main>
      <h2>🎬 Filmes em Cartaz</h2>
      <section>
        <CardFilme
          src="https://br.web.img2.acsta.net/pictures/23/05/08/10/29/0695770.jpg"
          alt="Imagem da capa do filme Oppenheimer"
          titulo="Oppenheimer"
          descricao="A história do criador da bomba atômica."
        />
        <CardFilme
          src="https://br.web.img2.acsta.net/c_310_420/pictures/23/06/21/21/10/1335465.jpg"
          alt="Imagem da capa do filme Barbie"
          titulo="Barbie"
          descricao="Uma aventura divertida no mundo real e no mundo cor-de-rosa."
        />
        <CardFilme
          src="https://upload.wikimedia.org/wikipedia/pt/1/14/Spide-Man_Poster.jpg"
          alt="Imagem da capa do filme Homem Aranha"
          titulo="Homem Aranha"
          descricao="Universos colidem e heróis se unem!"
        />
      </section>
    </main>
  );
};

export default Main;
