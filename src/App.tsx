import React, { useEffect } from 'react';
import { Routes, Route} from 'react-router-dom';

// Internals
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { About, Home, Menu, Events, Initiatives, RecipeProfile } from './pages';
import { Header, Footer } from './components';
import { createMockServer } from './mirage/createMockServer';

createMockServer()

function App() {
  useEffect(() => {
    fetch("https://restaurant.service/api/all")
      .then((res) => res.json())
      .then((json) => 
        console.log(json.restaurant)
      )
  }, [])
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/events" element={<Events />} />        
        <Route path="/initiatives" element={<Initiatives />} /> 
        <Route path="/recipes" element={<RecipeProfile />} />        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
