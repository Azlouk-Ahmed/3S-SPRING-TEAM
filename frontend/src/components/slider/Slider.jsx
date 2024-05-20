import React from 'react'
import "./slider2.css"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';


import { Navigation } from 'swiper/modules';
import Slide from './Slide';




function Slider() {
  return (
    <div className='p2'>
    <div className="ta-c">
    <div className="title3">OUR PARTNERS</div>
    <div className="title4">We have been working with some Fortune 10+ partners</div>
</div>
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><Slide /></SwiperSlide>
        <SwiperSlide><Slide /></SwiperSlide>
        <SwiperSlide><Slide /></SwiperSlide>
        <SwiperSlide><Slide /></SwiperSlide>
        <SwiperSlide><Slide /></SwiperSlide>
        <SwiperSlide><Slide /></SwiperSlide>

      </Swiper>
  </div>
  )
}

export default Slider