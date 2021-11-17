// import Holiday from '../Components/HolidaysList/Holiday'
import Greetingcard from "../Components/greetingcard/Greetingcard";

const ViewHoliday = () => {

  return (
    <div className="viewHoliday">
      <div className="holiday-cards ">
        <div className="view-holiday-overview">
          <h1 className="holiday-title">
            Holi bayrami {/* {holidayInfo.title} */}
          </h1>
          <div className="holiday-overview__content" >
            <span className="holiday-overview__content__link">
              Popularity: {/* {holidayInfo.popularity} */}</span>
            <span className="holiday-overview__content__link">
              Days: {/* {holidayInfo}  */}
            </span>
            <span className="holiday-overview__content__link">Countries : {/* {holidayInfo}  */}
            </span>
          </div> <br/>
          <p className="holiday-title view-holiday__overview">
            Hindistonda nishonlanadigan ranglar bayrami, Hindistonda nishonlanadigan ranglar
            bayrami,Hindistonda nishonlanadigan ranglar bayrami,Hindistonda nishonlanadigan
            ranglar bayrami,Hindistonda nishonlanadigan ranglar bayrami,Hindistonda
            nishonlanadigan ranglar bayrami,Hindistonda nishonlanadigan ranglar
            bayrami,Hindistonda nishonlanadigan ranglar bayrami,Hindistonda nishonlanadigan
            ranglar bayrami {/* {holidayInfo}  */}
          </p>
        </div>
        <div className="card">
          <img className='holiday-image' src="/img/eid.jpg" alt='img'/>
        </div>
        
      </div>
      <div className="greetingcard-content">
      <Greetingcard/>
      </div>
    </div>
  );
};
export default ViewHoliday;