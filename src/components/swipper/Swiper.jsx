import { EffectCoverflow, Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/effect-coverflow";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './swipe.css';

// import images to be used in swiper
import slide1 from '../../asserts/images/pinterest_board_photo.png'
import slide2 from '../../asserts/images/logo2.png'

export default () => {
  return (
    <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
      modules={[EffectCoverflow,Navigation, Pagination, Scrollbar, A11y]}
      navigation
      pagination={{ clickable: true }}
      
    >
      <SwiperSlide><img src={slide2} alt='slide1' /></SwiperSlide>
      <SwiperSlide><img src={slide2} alt='slide1' /></SwiperSlide>
      <SwiperSlide><img src={slide2} alt='slide1' /></SwiperSlide>
      <SwiperSlide><img src={slide2} alt='slide1' /></SwiperSlide>
      ...
    </Swiper>
  );
};