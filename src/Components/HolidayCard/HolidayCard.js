import React from 'react'

const HolidayCard = () => {
    const [countriesHoliday, setCountriesHoliday] = useState([])
    useEffect(() => {
        fetch(`https://holidayapi.com/v1/holidays?pretty&key=39538068-eb27-4e6f-8449-83ceea887670`).then(res => res.json())
          .then(data => {
            setCountriesHoliday(data.results);
          });
      },[])
    return (
        <div>

            {countriesHoliday.map( el => ( <Movie movieObj={el} />))}
        </div>
    )
    
}

export default HolidayCard
