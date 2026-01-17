import { useState } from 'react'
import s from './voluntario.module.scss'

const Voluntario = () => {
  const [mensagem, setMensagem] = useState("")

  return (
    <main>
      <section className={s.section}>
        <h1>Seja Voluntário</h1>
        <p>Junte-se a nós e faça a diferença na vida de pessoas que precisam</p>
        <div className={s.boxCards}>
          <article>
            <h3>Impacto Direto</h3>
            <p>Sua dedicação salva vidas e transforma comunidades.</p>
          </article>
          <article>
            <h3>Crescimento Pessoal</h3>
            <p>Desenvolva habilidades e cresça profissionalmente.</p>
          </article>
          <article>
            <h3>Comunidade</h3>
            <p>Faça parte de uma rede de profissionais comprometidos.</p>
          </article>
        </div>
      </section>
      <section className={s.sectionForm}>
        <form action="">
          <h2>Inscrição para Voluntários</h2>
          <fieldset>
            <legend>Dados Pessoais</legend>
            <input
            name='nome' 
            type="text" 
            pattern="^[A-Za-zÀ-ÖØ-ö\s'-]{2,100}$"
            placeholder='Seu nome'
            className={`${s.inputMedium}`} />
            <input 
            name='email'
            type="email"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            placeholder='Seu email'
            className={`${s.inputMedium}`} />
            <input 
            name='telefone'
            type="tel"
            pattern="^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$"
            onChange={(e) => setMensagem(e.target.value)}
            placeholder='Seu telefone'
            />
          </fieldset>
          <fieldset>
            <legend>Mensagem Adicional</legend>
            <textarea 
            value={mensagem}
            placeholder='Conte-nos porque você quer ser voluntario...'></textarea>
            <span>Entraremos em contato para mais informações</span>
            <button type='submit'>Enviar Inscrição</button>
          </fieldset>
        </form>   
      </section>
    </main>
    
  )
}

export default Voluntario
