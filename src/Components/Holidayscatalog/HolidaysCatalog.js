
import { useState } from 'react';

import Select from 'react-select';

import { Link } from "react-router-dom";

import { useEffect } from "react/cjs/react.development";
import HolidayCard from '../HolidayCard/HolidayCard';
import '../Holidayscatalog/HolidaysCatalog.css'




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



  // const [countryList, setCountries] = useState([])
  //   useEffect(() => {
  //       fetch(`http://localhost:8000/menuData/${id}`).then(res => res.json())
  //         .then(data => {
  //           setCountries(data.holidays);
  //           console.log(data)
  //         });
  //     },[]);
  

  // const countryOptions = countryList.map(el =>{
  //   return {
  //       value: el.code,
  //       label: el.name
  //   }
  // });


  const Holidays=[ {
    "id": "20200101_00c8188290db8ef488dbdf51e116859a",
    "name": "New Year's Day",
    "date": "2020-01-01",
    "observed": "2020-01-01",
    "substitute": false,
    "start": "2020-01-01T00:00:00Z",
    "end": "2020-01-01T23:59:59Z",
    "type": "public",
    "public": true,
    "country": "AZ",
    "subdivisions": []
  }, 
{
    "id": "20200102_04e080cc1e43199ee5a8e027966b78cb",
    "name": "Second Day of the New Year",
    "date": "2020-01-02",
    "observed": "2020-01-02",
    "substitute": false,
    "start": "2020-01-02T00:00:00Z",
    "end": "2020-01-02T23:59:59Z",
    "type": "public",
    "public": true,
    "country": "AZ",
    "subdivisions": []
}, {
    "id": "20200120_7c00a7610e120e7c594517c2b18b7b66",
    "name": "Martyrs' Day",
    "date": "2020-01-20",
    "observed": "2020-01-20",
    "substitute": false,
    "start": "2020-01-20T00:00:00Z",
    "end": "2020-01-20T23:59:59Z",
    "type": "public",
    "public": true,
    "country": "AZ",
    "subdivisions": []
}, {
    "id": "20200303_ac5b998fef4e19bede812637b884e560",
    "name": "World Wildlife Day",
    "date": "2020-03-03",
    "observed": "2020-03-03",
    "substitute": false,
    "start": "2020-03-03T00:00:00Z",
    "end": "2020-03-03T23:59:59Z",
    "type": "observance",
    "public": false,
    "country": "AZ",
    "subdivisions": []
}]

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
    
      const mappedDiscover =  Holidays.map( el => ( <HolidayCard key={el.id} HolidayObj={el} /> ))
      


  return (
    <section className='container'>

    <div className='SearchHoliday'>
      <form className='form' method="get">
      {/* <label>Country name</label> */}
        {/* <Select options={countryOptions} onChange={handleCountryChange}/> */}
        <label className='SearchBy'>Year</label>
        <Select options={yearOptions} onChange={handleYearChange} />
        <label className='SearchBy'>Month</label>
        <Select options={monthOptions} onChange={handleMonthChange} />
        <label className='SearchBy'>Language</label>
        <Select options={LanguageOptions} onChange={handleLanguageChange} />
        <br />
        <button className="search-btn" type="button" onClick={handleDiscover}>  Discover </button>
       
      </form>
      <div className='CountryHoliday'>

   {mappedDiscover}
      </div>
   </div>
    </section>
  
  );
};

export default HolidaysCatalog;