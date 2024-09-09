import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Annonces from './Pages/Annonces/Annonces';
import Error from './Pages/Error/Error';
import Header from './Components/Header/Header';
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <div className="app">
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
    </div>
  );
}

export default App;