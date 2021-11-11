// import Holiday from '../Components/HolidaysList/Holiday'
import Greetingcard from "../greetingcard/Greetingcard";

const ViewHoliday=()=>{
   
    return(
    <div className="viewHoliday" >
   
     
        <div className="holiday-cards ">   
      
        <div className="view-holiday-overview"> 
        <h1 className="holiday-title"> Holi bayrami </h1>
        <span className="">
            Popularity:
      {/* {holidayInfo.popularity} */}</span> 
          <span className="">
            Days:
             {/* {holidayInfo}  */}
          </span>
          <span className="holiday-title">Countries : 
           </span>
          <p className="view-holiday__overview">
           Hindistonda nishonlanadigan ranglar bayrami,  Hindistonda nishonlanadigan ranglar bayrami,Hindistonda nishonlanadigan ranglar bayrami,Hindistonda nishonlanadigan ranglar bayrami,Hindistonda nishonlanadigan ranglar bayrami,Hindistonda nishonlanadigan ranglar bayrami,Hindistonda nishonlanadigan ranglar bayrami,Hindistonda nishonlanadigan ranglar bayrami,Hindistonda nishonlanadigan ranglar bayrami</p>
       
        </div>   
        <div className="card">
      
  
      <img className='holiday-image' src="/img/eid.jpg" 
       alt='img' />
    </div>   
      </div>
      <Greetingcard/>
    </div>
    );
};

export default ViewHoliday;