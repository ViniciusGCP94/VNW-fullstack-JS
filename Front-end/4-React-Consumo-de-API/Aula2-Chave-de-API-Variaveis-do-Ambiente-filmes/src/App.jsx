import { useEffect, useState } from "react";
import "./Style.scss";
import axios from "axios";
import { FaSearch } from "react-icons/fa";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export default function App() {
  const [filmes, setFilmes] = useState([]);
  const [busca, setBusca] = useState("");
  const [buscaClick, setBuscaClick] = useState("");

  useEffect(() => {
    const buscarDados = async () => {
      const dados = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR`,
      );
      try {
        setFilmes(dados.data.results);
        console.log(dados);
      } catch (error) {
        alert(`Desculpe, houve uma falha ${error}`);
      }
    };
    buscarDados();
  }, []);

  //  FUNÇÃO DE BUSCA

  function clickBusca() {
    setBuscaClick(busca);
  }

  const filtrados = filmes.filter((item) =>
    item.title.toLowerCase().includes(buscaClick.toLowerCase()),
  );
  return (
    <>
      <header>
        <h1>
          Cine<span>VnW</span>
        </h1>
        <div className="div">
          <input
            type="text"
            placeholder="buscar filmes..."
            onChange={(e) => setBusca(e.target.value)}
            value={busca}
          />
          <FaSearch onClick={clickBusca} />
        </div>
      </header>
      <main>
        <section className="boxCard">
          {filtrados.map((item, id) => (
            <article className="card" key={id}>
              <div className="card__image">
                <span className="badge">New</span>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  alt={`Imagem do filme ${item.title}`}
                />
                <div className="play">▶</div>
              </div>

              <h2>{item.title}</h2>
              <h3>{Math.floor(item.vote_average)}/10</h3>

              <div className="rating">⭐⭐⭐⭐☆</div>
            </article>
          ))}
        </section>
      </main>
      <footer className="footer">
        <p>
          ©Cine<span>VnW</span> — Todos os direitos reservados
        </p>
      </footer>
    </>
  );
}
