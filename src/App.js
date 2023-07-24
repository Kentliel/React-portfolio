import './App.css';
import About from './pages/About';
import HireMe from './pages/HireMe';
import Home from './pages/Home';
import Proyectos from './pages/Proyectos';

import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/About' element={<About />}></Route>
      <Route path='/Proyectos' element={<Proyectos />}></Route>
      <Route path='/HireMe' element={<HireMe />}></Route>
     </Routes>
    </div>
  );
}

export default App;
