import logo from './logo.svg';
import './App.css';
import Nav from "./Components/Nav";
import Home from './Pages/Home';

import { useState, useEffect } from "react";
import { Routes, Route, useNavigate} from "react-router-dom";



function App() {
  return (
    <div className="App">
    <div>
        <Nav/>
    </div>
      <div>
        <Routes>
        <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
        

    </div>
  );
}

export default App;
