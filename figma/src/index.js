import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AddEdit from './components/Hero.js/AddEdit';
import View from './components/Hero.js/View';
import About from './components/Hero.js/About'
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Hero.js/Navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />}></Route>

        <Route path='/' element={<Navbar />}>
          <Route path='add' element={<AddEdit />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='view/:id' element={<View />}></Route>
          <Route path='update/:id' element={<AddEdit />}></Route>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);


