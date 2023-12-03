import React from 'react';
import { Routes, Route} from 'react-router-dom';

// Internals
import './App.css';
import { About, Home, Menu, Events } from './pages';
import { Header, Footer } from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/events" element={<Events />} />        

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
