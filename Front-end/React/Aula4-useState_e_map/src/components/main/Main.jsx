import { useState } from 'react';
import Card from '../card/Card';
import s from './main.module.scss';

const Main = () => {
    const [nome, setNome] = useState('');
    const [imagem, setImagem] = useState('');
    const [linkedIn, setLikedIn] = useState('');
    const [instrutores, setIntrutores] = useState([])

    const submeterForm = (e) => {
        e.preventDefault();
        const instrutoresObj = {
            nome: nome,
            imagem: imagem,
            linkedIn: linkedIn
        }

        setIntrutores([...instrutores, instrutoresObj])

        setNome('')
        setImagem('')
        setLikedIn('')

    }

    return(
        <main className={s.main}>
            <form onSubmit={submeterForm}>
                <h2>Cadastre um instrutor</h2>
                <input 
                    type="text" 
                    placeholder='Nome'
                    value={nome}
                    onChange={(e)=>(setNome(e.target.value))}
                />
                <input 
                    type="text" 
                    placeholder='Imagem'
                    value={imagem}
                    onChange={(e)=>(setImagem(e.target.value))}
                />
                <input 
                    type="text" 
                    placeholder='LinkedIn'
                    value={linkedIn}
                    onChange={(e)=>(setLikedIn(e.target.value))}
                />
                <button type='submit'>Cadastrar</button>
            </form>
            <section className={s.section}>
                {instrutores.map((instrutor)=>(
                    <Card
                        nome = {instrutor.nome}
                        imagem = {instrutor.imagem}
                        linkedIn = {instrutor.linkedIn}
                    />
                ))}
            </section>
        </main>
    )
}

export default Main