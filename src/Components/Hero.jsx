import React from 'react'
import frame from '/Frame.png'
import car from '/car.png'
import tick from '/tick.png'
import ios from '/ios.png'
import and from '/and.png'
import location from '/location.png'
import calendar from '/calendar.png'
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
function Hero() {
  
gsap.registerPlugin(useGSAP);
const container = useRef();
useGSAP(() => {
  gsap.from(".box", {x:50,
    opacity: 0,
    duration:1,
    scale:0
});
gsap.from(".box1", {x: -120,
    opacity: 0,
    duration:1
});
gsap.from(".ne", {y: 120,
    opacity: 0,
    duration:1
});
}, { scope: container});
  return (
    <div ref={container} className="relative h-full w-full">
    <div className="absolute bottom-0 left-[940px] transform-translate-x-1/2">
        <img src={frame} className="max-w-screen-xl" alt="" />
    </div>
  
    <div className=" flex flex-col md:flex-row items-center">
        <div className=" box1 w-full md:w-1/2 flex flex-col justify-center items-center">
            <div className="text-center">
                <h1 className='text-5xl font-semibold'>Find, book and <br /> rent a car <span className='text-blue'>Easily</span> <img className='absolute bottom-0 left-0 md:static' src={tick} alt="" /> </h1>
            </div>
            <div className="text-center mt-6 text-lg">Get a car wherever and whenever you <br /> need it with your iOS and Android device.</div>
            <div className="flex justify-center mt-4">
               <img src={and} alt="" className="mr-2" />
               <img src={ios} alt="" className="ml-2" />
            </div>
        </div>
        <div className="w-full box md:w-1/2 -z-0">
            <img className=' w-full' src={car} alt="" />
        </div>
    </div>
    
    <div className="flex justify-between items-center mt-[-90px] mx-6 md:mx-48 shadow-lg rounded-lg p-3 md:p-6">
        <div className="flex items-center gap-2">
            <img src={location} alt="" />
            <div>
                <h2 className='text-sm font-semibold text-txt'>Location</h2>
                <p className='text-xs text-gray-400'>Search your location</p>
            </div>
        </div>
        <div className="flex items-center gap-2">
            <img src={calendar} alt="" />
            <div>
                <h2 className='text-sm font-semibold text-txt'>Pickup date</h2>
                <p className='text-xs text-gray-400'>Tue 15 Feb, 09:00</p>
            </div>
        </div>
        <div className="flex items-center gap-2">
            <img src={calendar} alt="" />
            <div>
                <h2 className='text-sm font-semibold text-txt'>Return date</h2>
                <p className='text-xs text-gray-400'>Thu 16 Feb, 11:00</p>
            </div>
        </div>
        <button className="bg-blue text-sm text-white py-3 px-6 md:px-10 rounded-lg">Search</button>
    </div>
</div>


  )
}

export default Hero
