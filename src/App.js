import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import Ecosystem from './pages/Ecosystem';
import Services from './pages/Services';
import Industries from './pages/Industries';

const App = () => {
  return (
        <div className="App">
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/ecosystem' element={<Ecosystem />}/>
            <Route path='/services' element={<Services />}/>
            <Route path='/industries' element={<Industries />}/>
          </Routes>
        </div>
  );
}

export default App;