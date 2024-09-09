import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Annonces from '../../Pages/Annonces/Annonces';
import Error from '../../Pages/Error/Error';
import Header from '../Header/Header';
import Footer from "../Footer/Footer";


function RouterGlobal() {
  return (
    <React.StrictMode>
      <Router>
        <Header />
          <Routes>
              <Route path="/" element={<Home 
              />} />
              <Route path="/apropos" element={<About 
              />} />
              <Route path='/annonces/:annonceId' element={<Annonces 
              />} />
              <Route path="*" element={<Error 
              />} />
          </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  );
}

export default RouterGlobal;