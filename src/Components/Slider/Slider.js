import '../Slider/slider.css'
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

const Slider=() => {
  SwiperCore.use([Autoplay])
  return (
    <Swiper modules={[Autoplay]} spaceBetween={0} slidesPerView={1}
    autoplay={{
      delay: 2000, 
      disableOnInteraction: false,
      pauseOnMouseEnter: true
  }}
  >
  <SwiperSlide>
    <div className='bgimage' style={{ backgroundImage: `url(/img/eid.jpg)`}}>
      <div className='objects'>
      <h1 className='holiday_name'>Eid</h1>
            <p className='overview'>Partaking in the annual Holi Festival is the most fun I had as a kid. Holi is a Hindu festival of colors, celebrated once a year in March. And growing up in a Hindu household, I absolutely loved the spectacle that came along with celebrating Holi.</p>
         
        </div>
    </div>  
    </SwiperSlide>
    <SwiperSlide>
    <div className='bgimage' style={{ backgroundImage: `url(/img/archa.jpg)`}}>
      <div className='objects'>
      <h1 className='holiday_name'>Eid</h1>
            <p className='overview'>Partaking in the annual Holi Festival is the most fun I had as a kid. Holi is a Hindu festival of colors, celebrated once a year in March. And growing up in a Hindu household, I absolutely loved the spectacle that came along with celebrating Holi.</p>
         
        </div>
    </div>  
    </SwiperSlide>
    <SwiperSlide>
    <div className='bgimage' style={{ backgroundImage: `url(/img/holii.jpg)`}}>
      <div className='objects'>
      <h1 className='holiday_name'>Eid</h1>
            <p className='overview'>Partaking in the annual Holi Festival is the most fun I had as a kid. Holi is a Hindu festival of colors, celebrated once a year in March. And growing up in a Hindu household, I absolutely loved the spectacle that came along with celebrating Holi.</p>
         
        </div>
    </div>  
    </SwiperSlide>
    <SwiperSlide>
    <div className='bgimage' style={{ backgroundImage: `url(/img/christmas.jpg)`}}>
      <div className='objects'>
      <h1 className='holiday_name'>Eid</h1>
            <p className='overview'>Partaking in the annual Holi Festival is the most fun I had as a kid. Holi is a Hindu festival of colors, celebrated once a year in March. And growing up in a Hindu household, I absolutely loved the spectacle that came along with celebrating Holi.</p>
         
        </div>
    </div>  
    </SwiperSlide>
  </Swiper>
    
      

     

  );
};

export default Slider