import Header from './Components/Header/Header';
import { useState } from 'react';
import Select from 'react-select';

const HolidaysCatalog = () => {
    <Header />

     const [country, setCountry] = useState('')
     const [year,setYear] = useState('')
     const [month,setMonth] = useState('')
     const [day,setDay] = useState('')
     const [language,setLangiage] = useState('')



     const[countryList,setCountryList] = useState([])
     useEffect(() => {
        fetch(``).then(res => res.json())
          .then(data => {
            setGenresLIst(data.genres);
          });
      },[]);
    return (
       
    )
};

export default HolidaysCatalog;