/*
Com o Tailwind nós utilizamos classes utilitáreas para adicionar estilos.

Responsividade se dá com o acréscimo de um prefixo antes das classes utilitáreas:

Prefixo:            tamanho mínimo:
sm:                 >= 640px
md:                 >= 768px
lg:                 >= 1024px
xl:                 >= 1280px
2xl:                >= 1536px

Exemplo:
md:flex-row
*/

const Home = () => {
  return(
    <main className="
      h-screen
      flex flex-col justify-center items-center
      px-4 text-center
    ">
      <h1 className="
        text-2xl
        font-bold

        md:text-3xl
        lg:text-4xl
        ">Aula de estilo e responsividade</h1>

      <nav>
        <a href="https://nextjs.org/"
              target="_blank">Next - É um framework criado pela Vercel para aprimorar aplicações feitas com React.</a>
        <a href="https://tailwindcss.com/" target="_blank"> Tailwind - é um framework de CSS baseado em classes utilitárias. Você estiliza direto no HTML/JSX, sem criar arquivos CSS para tudo.</a>
      </nav>
    </main>
  )
}

export default Home;