import logo from './logo.svg';
import Header from './Components/Header/Header';
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import ViewHoliday from './pages/ViewHoliday'
import ViewCountry from './pages/ViewCountry'
import 'antd/dist/antd.css';
import NotFound from "./pages/Notfound";
import './index.css';
import SkrollToTop from './Components/SkrollToTop';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
   <div className="Main">
  <Router>
            <Header />
            <SkrollToTop/>
            
          <Routes>
          <Route path="/" element={<Home/>}> </Route>

          <Route path="/countrycatalog" element={<Catalog/>}> </Route>
      
          <Route path="/catalog" element={<Catalog/>}> </Route>
          <Route path="/holiday/:id" element={<ViewHoliday/>}> </Route>
          <Route path="/country/:id" element={<ViewCountry/>}> </Route>
          
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>

          </Router>
    
   </div>
  );
};
export default App;
