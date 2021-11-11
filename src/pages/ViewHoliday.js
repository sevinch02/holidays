// import Holiday from '../Components/HolidaysList/Holiday'
import Greetingcard from "../greetingcard/Greetingcard";

const ViewHoliday=()=>{
   
    return(
    <div className="viewHoliday" >
        <h1>this is viewHoliday page</h1>
     
        <div className="holiday-cards ">   
      
        <div className="view-holiday-overview"> 
        <h1 className="holiday-title"> Holi bayrami </h1>
          <p className="view-holiday__overview">
           Hindistonda nishonlanadigan ranglar bayrami,  Hindistonda nishonlanadigan ranglar bayrami,Hindistonda nishonlanadigan ranglar bayrami,Hindistonda nishonlanadigan ranglar bayrami,Hindistonda nishonlanadigan ranglar bayrami,Hindistonda nishonlanadigan ranglar bayrami,Hindistonda nishonlanadigan ranglar bayrami,Hindistonda nishonlanadigan ranglar bayrami,Hindistonda nishonlanadigan ranglar bayrami</p>
          <h4 className="">
            Popularity:
      {/* {holidayInfo.popularity} */}</h4>
          <h4 className="">
            Days:
             {/* {holidayInfo}  */}
          </h4>
          {/* <p className="movie-title">vote count : {holidayInfo} </p> */}
        </div>   
        <div className="card">
      
  
      <img className='holiday-image' src="./img/eid.jpg" 
       alt='' />
    </div>   
      </div>
      <Greetingcard/>
    </div>
    );
};

export default ViewHoliday;