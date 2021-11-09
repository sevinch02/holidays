

import Slider from "../Components/Slider/Slider";
import Holiday from '../Components/HolidaysList/Holiday'
import react from "react";
import CountryGrid from '../Components/CountryGrid/CountryGrid'
import Footer from "../Components/Footer/Footer";


const Home=()=>{
    return (
        <div>
        <section className='first-section'>
           <Slider/>
           <Holiday/>
        </section>
           
        <CountryGrid/>
        <Footer/>
       </div>

    )
}

export default Home