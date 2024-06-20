import logo from './logo.svg';
import './App.css';
import React from 'react';
import{BrowserRouter as Router,Routes,Route, BrowserRouter}from "react-router-dom";
import Home from './pages/home/Home';
import List from './pages/list/List';
import Hotel from './pages/hotel/Hotel';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/hotels" element={<List/>}/>
      <Route path="/hotels/:id" element={<Hotel/>}/>
      </Routes> 
      
    </div>
    </BrowserRouter>
  );
}

export default App;
