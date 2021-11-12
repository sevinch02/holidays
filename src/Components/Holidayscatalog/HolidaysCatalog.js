
import { useState } from 'react';

import Select from 'react-select';
import HolidayList from '../HolidaysList/HolidayList';
import { Link } from "react-router-dom";

import { useEffect } from "react/cjs/react.development";





const HolidaysCatalog = () => {

  const [country, setCountry] = useState('');
  const [year, setYear] = useState('');
  const [month,setMonth] = useState('')
  const [language,setLanguage] = useState('')
  const monthOptions = [
    { value: '1', label: 'January' },
    { value: '2', label: 'February' },
    { value: '3', label: 'March' },
    { value: '4', label: 'April' },
    { value: '5', label: 'May' },
    { value: '6', label: 'Juny' },
    { value: '7', label: 'July' },
    { value: '8', label: 'August' },
    { value: '9', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' }
  ];

  const yearOptions = [
    { value: '2000', label: '2000' },
    { value: '2001', label: '2001' },
    { value: '2002', label: '2002' },
    { value: '2003', label: '2003' },
    { value: '2004', label: '2004' },
    { value: '2005', label: '2005' },
    { value: '2006', label: '2006' },
    { value: '2006', label: '2006' },
    { value: '2007', label: '2007' },
    { value: '2008', label: '2008' },
    { value: '2009', label: '2009' },
    { value: '2010', label: '2010' },
    { value: '2011', label: '2011' },
    { value: '2012', label: '2012' },
    { value: '2013', label: '2013' },
    { value: '2014', label: '2014' },
    { value: '2015', label: '2015' },
    { value: '2016', label: '2016' },
    { value: '2017', label: '2017' },
    { value: '2018', label: '2018' },
    { value: '2019', label: '2019' },
    { value: '2020', label: '2020' },
   
  ];

  const LanguageOptions=[
      {value: 'ru' , label: 'ru'},
      {value: 'en' , label: 'en'},
      {value: 'uz' , label: 'uz'}
  ]

  // server dan olish kerak



  const [countryList, setCountries] = useState([])
    useEffect(() => {
        fetch(`https://holidayapi.com/v1/countries?pretty&key=39538068-eb27-4e6f-8449-83ceea887670`).then(res => res.json())
          .then(data => {
            setCountries(data.countries);
            console.log(data)
          });
      },[]);
  

  const countryOptions = countryList.map(el =>{
    return {
        value: el.code,
        label: el.name
    }
  });


  

  const handleYearChange = (newValue) => {
    setYear(newValue.value);
    console.log(newValue.value)
  };
  const handleMonthChange = (newValue) => {
    setMonth(newValue.value);
    console.log(newValue.value)
  };
  const handleLanguageChange = (newValue) => {
    setLanguage(newValue.value);
    console.log(newValue);
  };
  const handleCountryChange = (newValue) => {
    setCountry(newValue.value);
    console.log(newValue.value);
  };



  const [discover, setDiscover] = useState([])
  const handleDiscover = () =>{
  
      fetch(`https://holidayapi.com/v1/holidays?pretty&key=39538068-eb27-4e6f-8449-83ceea887670&country=${country}&year=${year}&month=${month}&language=${language}`).then(res => res.json())
        .then(data => {
          setDiscover(data.results);
          console.log(data)
        });
    }
    
      const mappedDiscover =  discover.map( el => ( <HolidayList key={el.code} HolidayObj={el} /> ))
      


  return (
    <div>
      <p> <div className="filter" /> Filter </p>
      <form className='form' method="get">
      <label>Country name</label>
        <Select options={countryOptions} onChange={handleCountryChange}/>
        <label>Year</label>
        <Select options={yearOptions} onChange={handleYearChange} />
        <label>Month</label>
        <Select options={monthOptions} onChange={handleMonthChange} />
        <label>Language</label>
        <Select options={LanguageOptions} onChange={handleLanguageChange} />
        <br />
        <button className="search-btn" type="button" onClick={handleDiscover}>  Discover </button>
       
      </form>
      <div className='flex'>

   {mappedDiscover}
      </div>
   </div>
  
  );
};

export default HolidaysCatalog;