import react from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '../views/Home/Home';
import Offers from '../views/Offers/Offers';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Offers' element={<Offers />} />
      </Routes>
    </Router>
  );
}

export default App;
