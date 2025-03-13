import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Confirmacao from './Pages/Confirmacao/Confirmacao';
import Formulario from './Pages/Formulario/Formulario';



function App() {


  return (
    <>
      <Router>
        <Routes>

          <Route path="/" exact element={<Home />} />

          <Route path="/formulario" exact element={<Formulario />} />

          <Route path="/confirmacao" exact element={<Confirmacao />} />
          
        </Routes>

      </Router>



    </>
  )
}

export default App
