import S from "./footer.module.scss";

function Footer()  {
  
  return (
    <>
        <footer className={S.footer}>
            <span className={S.textFooter}>© 2025 Vai na Web & Empower. Todos os direitos reservados. Projeto destinado exclusivamente a fins educativos.</span>
        </footer>
    </>
  )
}

export default Footer