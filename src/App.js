import './App.css';
import About from './pages/About';
import Home from './pages/Home';

import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/About' element={<About />}></Route>
     </Routes>
    </div>
  );
}

export default App;
