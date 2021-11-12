import {Link} from 'react-router-dom'


const Holiday = ({HolidayObj})=>{
    return(
        <div className='holiday' >
          
        <div className='card-title'>
        <p className='holiday-name'> {HolidayObj.title ? HolidayObj.title : HolidayObj.name}</p>
        <span>{HolidayObj.data}</span>

        </div>
        </div>
    )
}

export default Holiday