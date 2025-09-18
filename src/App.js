import React,{useState} from 'react'
import ReactDOM from 'react-dom/client'
import { Routes,Route,Link } from 'react-router-dom'
import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Courses from "./Components/Courses"

function App() {
  return (
    <div>
      <div className='nav-bar'>
        <nav>
          <ul>
            <li ><Link to="/home"> Home </Link></li>
            <li><Link to="/contact"> Contact </Link></li>
            <li><Link to="/courses"> Courses </Link></li>
            <li><Link to="/about"> About </Link></li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/courses" element={<Courses/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </div>
  );
}
export default App;