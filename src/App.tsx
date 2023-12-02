import React from 'react';
import { Routes, Route} from 'react-router-dom';

// Internals
import './App.css';
import { Home } from './pages';
import { Header } from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
