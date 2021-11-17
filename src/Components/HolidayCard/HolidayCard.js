import React from 'react'
import '../HolidayCard/holidaycard.css'
const HolidayCard = ({HolidayObj}) => {
   return(
       <div className='card'>
           <div>
           <img className='card-img' src='/img/archa.jpg'/>
           </div>
           <div className='card-text'>
               <h1>{HolidayObj.name}</h1>
               <span>{HolidayObj.date}</span>
           </div>
       </div>
   )
    
}

export default HolidayCard
