import logo from './logo.svg';
import Header from './Components/Header/Header';
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import ViewHoliday from './pages/ViewHoliday';
import ViewCountry from './pages/ViewCountry';
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
import HolidaysCatalog from './Components/Holidayscatalog/HolidaysCatalog';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import uz from './locales/uz.json'
import ru from './locales/ru.json'
import en from './locales/en.json'
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      },
      ru: {
        translation: ru
      },
      uz: {
        translation: uz
      }
    },
    lng: "uz",
    fallbackLng: "en"
  });

function App() {
  return (
   <div className="Main">
  
  <Router>
            <Header />
            <SkrollToTop/>
            
          <Routes>
          <Route path="/" element={<Home/>}> </Route>

          <Route path="/countrycatalog" element={<Catalog/>}> </Route>
          <Route path="/holidaycatalog" element={<HolidaysCatalog/>}> </Route>

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
