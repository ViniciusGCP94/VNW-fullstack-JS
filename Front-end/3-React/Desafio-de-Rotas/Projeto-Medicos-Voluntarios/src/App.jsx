import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/footer'
import './globalStyle.scss'
import Home from './pages/home/Home'
import Voluntario from './pages/voluntario/Voluntario'

function App() {


  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/voluntario' element={<Voluntario/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
