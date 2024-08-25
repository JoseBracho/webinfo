import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import Ecosystem from './pages/Ecosystem';
import Services from './pages/Services';

const App = () => {
  return (
        <div className="App">
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/ecosystem' element={<Ecosystem />}/>
            <Route path='/services' element={<Services />}/>
          </Routes>
        </div>
  );
}

export default App;