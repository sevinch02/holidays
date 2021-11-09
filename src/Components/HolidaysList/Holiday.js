import { Link } from 'react-router-dom'
import '../HolidaysList/holiday.css'

const Holiday=()=>{
    return(
        <div container='container'>
            <h1 className='todays_holiday'>Today's holidays</h1>
            <div className="holiday-cards">
            <div className='card'>
                <img src='/img/eid.jpg'/>
                <div className='cards_text'>

                <div className='row'>
                <h1>EID</h1>  
                <div>
                    <img className='flag' src='/img/quvayt.jpg'/>
                    <img className='flag' src='/img/saudiya.png'/>
                    <img className='flag' src='/img/baa.svg'/>
                </div>
                </div>
                <button>View holiday</button>  
                </div>
            </div>
            </div>
        </div>
    )
}

export default Holiday