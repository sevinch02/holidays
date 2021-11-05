import logo from './logo.svg';

import Header from './Components/Header/Header';
import Home from './pages/Home'
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
          <Route path="/">
            <Home />
          </Route>
        </Routes>
          </Router>
    
   </div>
  );
};
export default App;
