import react from 'react';
import { BrowserRouter as  Routes } from 'react-router-dom'

import Routes from "./routes/Routes";

function App() {
  return (
    <BrowserRouter>
        <Routes/>
    </BrowserRouter>
  );
}

export default App;
