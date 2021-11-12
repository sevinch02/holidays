import { Link } from 'react-router-dom'
import '../HolidaysList/holiday.css'

const Holiday=()=>{
    return(
        <div container='container'>
            <h1 className='todays_holiday'>Today's holidays</h1>
            <div className='Holidayss'>

            <div className="holiday-cards">
            <div className='card'>
            <div className="image">
  <span><img src="/img/eid.jpg" alt=""/></span>
<div id="container">

<svg version="1.1"
	 xmlns="http://www.w3.org/2000/svg"
	 x="0px" y="0px" viewBox="0 0 3841 108.5"
	 style={{ overflow: 'scroll', enableBackground:'new 0 0 3841 108.5'}} >
<defs>
</defs>
<path style={{fill: 'blueviolet', strokeMiterlimit:'10'}} d="M3360.5,97.739c-242,0-480-48.375-480-48.375
	S2647.5,0.5,2400.5,0.5s-480,48.375-480,48.375s-238,48.864-480,48.864s-480-48.375-480-48.375S727.5,0.5,480.5,0.5
	S0.5,48.875,0.5,48.875V108h1920h1920V48.875C3840.5,48.875,3602.5,97.739,3360.5,97.739z"/>
</svg>

</div>
</div>

                <div className='cards_text'>

                <div className='row'>
                <h1 className='name'>EID</h1>  
                <div className='flags'>
                    <img className='flag' src='/img/quvayt.jpg'/>
                    <img className='flag' src='/img/saudiya.png'/>
                    <img className='flag' src='/img/baa.svg'/>
                </div>
                </div>
                <Link to='/holiday/:id'>View holiday</Link>  
                </div>
            </div>
            </div>
            <div className="holiday-cards">
            <div className='card'>
            <div className="image">
  <span><img src="/img/holi.jpg" alt=""/></span>
<div id="container">

<svg version="1.1"
	 xmlns="http://www.w3.org/2000/svg"
	 x="0px" y="0px" viewBox="0 0 3841 108.5"
	 style={{ overflow: 'scroll', enableBackground:'new 0 0 3841 108.5'}} >
<defs>
</defs>
<path style={{fill: 'blueviolet', strokeMiterlimit:'10'}} d="M3360.5,97.739c-242,0-480-48.375-480-48.375
	S2647.5,0.5,2400.5,0.5s-480,48.375-480,48.375s-238,48.864-480,48.864s-480-48.375-480-48.375S727.5,0.5,480.5,0.5
	S0.5,48.875,0.5,48.875V108h1920h1920V48.875C3840.5,48.875,3602.5,97.739,3360.5,97.739z"/>
</svg>

</div>
</div>

                <div className='cards_text'>

                <div className='row'>
                <h1 className='name'>Holi</h1>  
                <div className='flags'>
                    <img className='flag' src='/img/quvayt.jpg'/>
                    <img className='flag' src='/img/saudiya.png'/>
                    <img className='flag' src='/img/baa.svg'/>
                </div>
                </div>
                <Link to='/holiday/:id'>View holiday</Link>  
                </div>
            </div>
            </div>
            <div className="holiday-cards">
            <div className='card'>
            <div className="image">
  <span><img src="/img/womens day.jpg" alt=""/></span>
<div id="container">

<svg version="1.1"
	 xmlns="http://www.w3.org/2000/svg"
	 x="0px" y="0px" viewBox="0 0 3841 108.5"
	 style={{ overflow: 'scroll', enableBackground:'new 0 0 3841 108.5'}} >
<defs>
</defs>
<path style={{fill: 'blueviolet', strokeMiterlimit:'10'}} d="M3360.5,97.739c-242,0-480-48.375-480-48.375
	S2647.5,0.5,2400.5,0.5s-480,48.375-480,48.375s-238,48.864-480,48.864s-480-48.375-480-48.375S727.5,0.5,480.5,0.5
	S0.5,48.875,0.5,48.875V108h1920h1920V48.875C3840.5,48.875,3602.5,97.739,3360.5,97.739z"/>
</svg>

</div>
</div>

                <div className='cards_text'>

                <div className='row'>
                <h1 className='name'>Womens day</h1>  
                <div className='flags'>
                    <img className='flag' src='/img/quvayt.jpg'/>
                    <img className='flag' src='/img/saudiya.png'/>
                    <img className='flag' src='/img/baa.svg'/>
                </div>
                </div>
                <Link to='/holiday/:id'>View holiday</Link>  
                </div>
            </div>
            </div>
            <div className="holiday-cards">
            <div className='card'>
            <div className="image">
  <span><img src="/img/christmas.jpg" alt=""/></span>
<div id="container">

<svg version="1.1"
	 xmlns="http://www.w3.org/2000/svg"
	 x="0px" y="0px" viewBox="0 0 3841 108.5"
	 style={{ overflow: 'scroll', enableBackground:'new 0 0 3841 108.5'}} >
<defs>
</defs>
<path style={{fill: 'blueviolet', strokeMiterlimit:'10'}} d="M3360.5,97.739c-242,0-480-48.375-480-48.375
	S2647.5,0.5,2400.5,0.5s-480,48.375-480,48.375s-238,48.864-480,48.864s-480-48.375-480-48.375S727.5,0.5,480.5,0.5
	S0.5,48.875,0.5,48.875V108h1920h1920V48.875C3840.5,48.875,3602.5,97.739,3360.5,97.739z"/>
</svg>

</div>
</div>

                <div className='cards_text'>

                <div className='row'>
                <h1 className='name'>christmas</h1>  
                <div className='flags'>
                    <img className='flag' src='/img/quvayt.jpg'/>
                    <img className='flag' src='/img/saudiya.png'/>
                    <img className='flag' src='/img/baa.svg'/>
                </div>
                </div>
                <Link to='/holiday/:id'>View holiday</Link>  
                </div>
                <Link to ='/holidaycatalog'>ALL</Link>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Holiday