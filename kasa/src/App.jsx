import './index.css';
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Announces from './Pages/Announces/Announces';
import Error from './Pages/Error/Error';


function App() {
  return (
    <div className="app">
      <Routes>
          <Route path="/" element={<Home 
          />} />
          <Route path="/apropos" element={<About 
          />} />
          <Route path='/annonces/:announceId' element={<Announces 
          />} />
          <Route path="*" element={<Error 
          />} />
      </Routes>
    </div>
  );
}

export default App;