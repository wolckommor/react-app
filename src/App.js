import XO from './components/XO'
import './App.css';
import Counter from './components/Counter';
import { NavLink } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Ball from './components/Ball';
import Greeting from './components/Greeting'; 
import ShopCard from './components/ShopCard';
import StarRating from './components/StarRating';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav className="nav">
        <NavLink to="/home" className ="navLink">Home</NavLink>
        <NavLink to="/xo" className ="navLink">XO</NavLink>
        <NavLink to="/count" className ="navLink">Counter</NavLink>
        <NavLink to="/ball" className ="navLink">Ball</NavLink>
        <NavLink to="/greeting" className ="navLink">Greeting</NavLink>
        <NavLink to="/shopcard" className ="navLink">ShopCard</NavLink>
        <NavLink to="/starrating" className ="navLink">Stars</NavLink>
      </nav>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/xo" element={<XO />}></Route>
          <Route path ="/count" element={<Counter start={0} />}></Route>
          <Route path="/ball" element={<Ball />}></Route>
          <Route path="/greeting" element={<Greeting />}></Route>
          <Route path="/shopcard" element={<ShopCard />}></Route>
          <Route path="/starrating" element={<StarRating numTotalStars="10" initialRating="3" />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
