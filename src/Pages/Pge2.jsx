import React from 'react'
import loctick from '/loctick.png'
import carblue from '/carblue.png'
import calendarbl from '/calendarbl.png'
import volvo from '/carLogo/volvo.png'
import acc from '/carLogo/acc.png'
import audi from '/carLogo/audi.png'
import honda from '/carLogo/honda.png'
import jaguar from '/carLogo/jaguar.png'
import Nissan from '/carLogo/Nissan.png'
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import {Autoplay, FreeMode, Pagination ,Navigation } from 'swiper/modules';

function Pge2() {
  return (
    <div className="h-full w-full ">
    <div className="w-full">
      <div className="text-center mt-14 pt-12">
          <button className="text-blue text-lg bg-[#d9e6f5] py-2 px-7 font-semibold rounded-lg cursor-pointer">HOW IT WORK</button>
      </div>
      <div className="text-center mt-8">
          <h1 className="text-4xl">Rent with following 3 working steps</h1>
      </div>
      <div className="flex justify-between items-center mt-16 mx-80 w-1/2">
        <div >
            <img className="bg-[#d9e6f5] p-4 rounded" src={loctick} alt="" />
          <div className='text-center mt-4'>
          <h1>Choose location</h1>
            <p className='text-xs text-txt mt-2'>Choose your and find <br /> your best car</p>
          </div>
       
        </div>
        <div >
            <img className="bg-[#d9e6f5] p-4 rounded" src={calendarbl} alt="" />
          <div className='text-center mt-4'>
          <h1>Pick-up date</h1>
            <p className='text-xs text-txt mt-2'>Select your pick up date and <br />time to book your car</p>
          </div>
       
        </div>
        <div >
            <img className="bg-[#d9e6f5] p-4 rounded" src={carblue} alt="" />
          <div className='text-center mt-4'>
          <h1>Choose location</h1>
            <p className='text-xs text-txt mt-2'>Book your car and we will deliver <br />it directly to you</p>
          </div>
       
        </div>
      </div>
    </div>

    <div className='flex justify-between items-center mt-44'>
    <Swiper 
  slidesPerView={3}
  spaceBetween={30}
  freeMode={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
       modules={[Autoplay,FreeMode, Pagination,Navigation]}
       className="mySwiper"
      >
      <SwiperSlide ><img src={volvo} alt="" /></SwiperSlide>
       <SwiperSlide><img src={acc} alt="" /></SwiperSlide>
       <SwiperSlide><img src={audi} alt="" /></SwiperSlide>
       <SwiperSlide><img src={Nissan} alt="" /></SwiperSlide>
       <SwiperSlide><img src={jaguar} alt="" /></SwiperSlide>
       <SwiperSlide><img src={honda} alt="" /></SwiperSlide>
      </Swiper>
      </div>
  </div>
 
    
  )
}

export default Pge2
