import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import './globalStyle.scss'
import Inicio from './pages/inicio/Inicio'
import Projetos from './pages/projetos/Projetos'
import Contato from './pages/contato/Contato'

function App() {

  return (
    <>
      <BrowserRouter>
      {/* Serve como um container que vai permitir o uso e habilitar todas as nossas rotas. Analogia: É como ligar o Wi-Fi do GPS no seu celular. Sem isso, o GPS não sabe te levar para lugar nenhum. Sem ele, o React não entende que você quer criar um sistema de páginas. */}
        <Header />
        <Routes>
          {/* Routes funciona como uma "caixa" para todas as nossas rotas. Dentro dele, vamos colocar cada rota que queremos. Então cada rota estará dentro do Routes. */}

          {/* Route define cada rota individual, cada caminho específico. Com ele, podemos dizer qual página ou componente mostrar para cada URL específica. */}

          <Route path='/' element={<Inicio />}/>
          <Route path='/projetos' element={<Projetos />} />
          <Route path='/contato' element={<Contato />}/>
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
