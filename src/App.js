import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import Ecosystem from './pages/Ecosystem';

const App = () => {
  return (
        <div className="App">
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/ecosystem' element={<Ecosystem />}/>
          </Routes>
        </div>
  );
}

export default App;