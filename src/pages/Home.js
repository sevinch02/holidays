import react from "react";
import CountryGrid from '../Components/CountryGrid/CountryGrid'
import Footer from "../Components/Footer/Footer";

const Home=()=>{
    return (
        <div>
        <section className='first-section'>
            <h1 className='sayt-name'>FIESTA</h1>
        </section> 
        <CountryGrid/>
        <Footer/>
        </div>
    )
}

export default Home