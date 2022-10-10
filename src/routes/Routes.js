import react from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '../views/Home/Home';
import Products from '../views/Products/Products';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Products' element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
