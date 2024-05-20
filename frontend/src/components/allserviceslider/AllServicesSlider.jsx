import React, { useState, useRef } from 'react';
import '../slider/slider2.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import DesignSlide from './DesignSlide';
import DataSlide from './DataSlide';
import DevelopmentSlide from './DevelopmentSlide';
import FinanceSlide from './FinanceSlide';
import MarketingSlide from './MarketingSlide';

function AllServicesSlider() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setCurrentSlideIndex(swiper.activeIndex);
  };

  const handleSlideClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <div className="servicesslider">
      <div className="ta-c">
        <div className="title2">OUR PARTNERS</div>
      </div>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={handleSlideChange}
        navigation={true}
        centeredSlides={true}
        slidesPerView={5}
        modules={[Navigation]}
        className="mySwiper mt"
      >
        <SwiperSlide onClick={() => handleSlideClick(0)}>Design</SwiperSlide>
        <SwiperSlide onClick={() => handleSlideClick(1)}>Marketing</SwiperSlide>
        <SwiperSlide onClick={() => handleSlideClick(2)}>Data</SwiperSlide>
        <SwiperSlide onClick={() => handleSlideClick(3)}>Development</SwiperSlide>
        <SwiperSlide onClick={() => handleSlideClick(4)}>Finance</SwiperSlide>
        <SwiperSlide onClick={() => handleSlideClick(5)}>item 6</SwiperSlide>
        <SwiperSlide onClick={() => handleSlideClick(6)}>item 1</SwiperSlide>
        <SwiperSlide onClick={() => handleSlideClick(7)}>item 2</SwiperSlide>
        <SwiperSlide onClick={() => handleSlideClick(8)}>item 3</SwiperSlide>
        <SwiperSlide onClick={() => handleSlideClick(9)}>item 4</SwiperSlide>
        <SwiperSlide onClick={() => handleSlideClick(10)}>item 5</SwiperSlide>
        <SwiperSlide onClick={() => handleSlideClick(11)}>item 6</SwiperSlide>
      </Swiper>
      <div className="container mt slidesection">
        {currentSlideIndex === 0 && <DesignSlide />}
        {currentSlideIndex === 1 && <MarketingSlide />}
        {currentSlideIndex === 2 && <DataSlide />}
        {currentSlideIndex === 3 && <DevelopmentSlide />}
        {currentSlideIndex === 4 && <FinanceSlide />}
      </div>
    </div>
  );
}

export default AllServicesSlider;
