import logo from './logo.svg';

import Header from './Components/Header/Header';
import Home from './pages/Home'
import Favourites from './pages/Favourites';
import Holidays from './pages/Holidays';
import Aboutus from './pages/About-us';
import Animation from './Components/Animation/Animation';


import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
   <div className="wrapper">
  <Router>
            <Header />
            
          <Routes>
          <Route path="/" element={<Home/>}> </Route>
          <Route path="/favourites" element={<Favourites/>}> </Route>
          <Route path="/holidays" element={<Holidays/>}> </Route>
          <Route path="/about-us" element={<Aboutus/>}> </Route>
          <Route path="/animation" element={<Animation/>}> </Route>
        </Routes>
          </Router>
    
   </div>
  );
};
export default App;
