import logo from './logo.svg';
import './App.css';
import Nav from "./Components/Nav";
import Home from './Pages/Home';
import Contact from './Pages/Contact'
import Menu from './Pages/Menu'
import Gallery from './Pages/Gallery';
import Alert from "./Components/Alert"

import { useState, useEffect } from "react";
import { Routes, Route, useNavigate} from "react-router-dom";



function App() {
  return (
    <div className="App">
    <div> 
         <Nav/> 
    </div>
    <div>
       <Alert/>
    </div>
      <div>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/menu" element={<Menu/>}/>
        </Routes>
      </div>
        

    </div>
  );
}

export default App;
