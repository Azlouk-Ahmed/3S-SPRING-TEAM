import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay , Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import '../pages/swiper.css';

import 'swiper/swiper-bundle.css'; // Import Swiper styles




function MySwiper() {
    
  return (
    <>

    <Swiper spaceBetween={30}
        centeredSlides={true}
        slidesPerView={3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay,  Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="/image/Logo1.png" alt="" srcset="" /></SwiperSlide>
        <SwiperSlide><img src="/image/Logo2.png" alt="" srcset="" /></SwiperSlide>
        <SwiperSlide><img src="/image/Logo3.png" alt="" srcset="" /></SwiperSlide>
        <SwiperSlide><img src="/image/Logo1.png" alt="" srcset="" /></SwiperSlide>
        
      </Swiper></>
  )
}

export default MySwiper