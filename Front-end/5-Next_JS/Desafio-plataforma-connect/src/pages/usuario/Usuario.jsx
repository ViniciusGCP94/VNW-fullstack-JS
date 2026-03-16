import S from "./Usuario.module.scss";

function Usuario() {
  const usuario = {
    nome: "Vinicius Pereira",
    status: "Voluntário Ativo",
    bio: "Fazer a diferença na comunidade é algo que me motiva, pois sei que pequenas ações podem causar grandes impactos.",
    localizacao: "Santa Cruz do Sul, RS",
    email: "viniciusgcp94@gmail.com",
    foto: "https://avatars.githubusercontent.com/u/92233072?v=4",
    dataMembro: "Janeiro 2022",
    interesses: ["Educação", "Meio Ambiente", "Assistência Social"]
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