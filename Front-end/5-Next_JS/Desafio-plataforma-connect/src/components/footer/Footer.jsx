import S from "./footer.module.scss";

function Footer()  {
  
  return (
    <>
        <footer className={S.footer}>
            <div className={S.textContainer}><span className={S.textCopyright}>© 2025 Vai na Web & Empower.</span><span className={S.textCopyright}>Todos os direitos reservados. Projeto destinado exclusivamente a fins educativos.</span></div>
        </footer>
    </>
  )
}

export default Footer