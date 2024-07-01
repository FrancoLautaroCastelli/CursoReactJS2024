
import './App.css'
import Footer from './components/Footer'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'


function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer  Mensajeh1={'Bienvenido, gracias por ingresar al sistema!'} />
      <Footer/>
    </>
  )
}

export default App
