import S from "./Usuario.module.scss";

function Usuario() {
  const usuario = {
    nome: "Vinicius Bispo",
    status: "Voluntário Ativo",
    bio: "Apaixonado por fazer a diferença na comunidade. Acredito que pequenas ações podem transformar vidas e estou sempre em busca de novas oportunidades para ajudar.",
    localizacao: "Salvador, BA",
    email: "vini.bispo@gmail.com",
    foto: "https://avatars.githubusercontent.com/u/118212495?v=4",
    dataMembro: "Janeiro 2022",
    interesses: ["Educação", "Meio Ambiente", "Assistência Social", "Design"]
  };

  return (
    <main className={S.usuarioContainer}>
      <section className={S.perfilSection}>
        <div className={S.fotoPerfil}>
          <img src={usuario.foto} alt={usuario.nome} />
        </div>

        <div className={S.infoUsuario}>
          <h1 className={S.nomeUsuario}>{usuario.nome}</h1>
          <p className={S.statusUsuario}>{usuario.status}</p>

          <p className={S.bioUsuario}>{usuario.bio}</p>

          <div className={S.detalhes}>
            <div className={S.detalheItem}>
              <span className={S.icone}>📍</span>
              <span>{usuario.localizacao}</span>
            </div>

            <div className={S.detalheItem}>
              <span className={S.icone}>✉️</span>
              <span>{usuario.email}</span>
            </div>

            <div className={S.detalheItem}>
              <span className={S.icone}>📅</span>
              <span>Membro desde {usuario.dataMembro}</span>
            </div>
          </div>

          <div className={S.interessesContainer}>
            {usuario.interesses.map((interesse, index) => (
              <span key={index} className={S.tagInteresse}>
                {interesse}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Usuario;