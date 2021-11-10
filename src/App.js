import logo from './logo.svg';

import Header from './Components/Header/Header';
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import ViewHoliday from './pages/ViewHoliday'
import 'antd/dist/antd.css';


import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ViewCountry from './pages/ViewCountry';

function App() {
  return (
   <div className="Main">
  <Router>
            <Header />
            
          <Routes>
          <Route path="/" element={<Home/>}> </Route>
          <Route path="/catalog" element={<Catalog/>}> </Route>
          <Route path="/viewholiday" element={<ViewHoliday/>}> </Route>
          <Route path="/viewcountry" element={<ViewCountry/>}> </Route>
        </Routes>

          </Router>
    
   </div>
  );
};
export default App;
