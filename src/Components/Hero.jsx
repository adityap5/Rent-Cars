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
  gsap.from(".box", {x: 50,
    opacity: 0,
    duration:1
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
    <div ref={container} className="h-full w-full static">
    <div className="absolute bottom-0 left-[816px]">
        <img src={frame} className="w-[800px] h-[766px]" alt="" />
    </div>
  
    <div className="flex">
        <div className="box1 w-1/2">
            <div className="text-center">
                <h1 className='text-5xl font-semibold'>Find, book and <br /> rent a car <span className='text-blue'>Easily</span> <img className='absolute bottom-[410px] left-[435px]' src={tick} alt="" /> </h1>
            </div>
            <div className="text-center mt-6 text-lg">Get a car wherever and whenever you <br /> need it with your IOS and Android device.</div>
            <div className="flex place-content-center gap-2 mt-4">
               <img src={and} alt="" />
               <img src={ios} alt="" />
            </div>
        </div>
        <div className="w-1/2">
            <img className='box' src={car} alt="" />
        </div>
    </div>
    <div className="ne flex justify-between items-center mt-[-90px] mx-48 shadow-lg rounded-lg p-3">
        <div className=" flex justify-between items-center gap-2">
            <div ><img src={location} alt="" /></div>
            <div><h2 className='text-sm font-semibold text-txt'>Location</h2>
                <p className='text-xs text-gray-400'>Search your location</p>
            </div>
        </div>
        <div className="flex justify-between items-center gap-2">
            <div ><img src={calendar} alt="" /></div>
            <div><h2 className='text-sm font-semibold text-txt'>Pickup date</h2>
                <p className='text-xs text-gray-400'>Tue 15 Feb, 09:00</p>
            </div>
        </div>
        <div className="flex justify-between items-center gap-2">
            <div ><img src={calendar} alt="" /></div>
            <div><h2 className='text-sm font-semibold text-txt'>Return date</h2>
                <p className='text-xs text-gray-400'>Thu 16 Feb, 11:00</p>
            </div>
        </div>
        <div >
            <button className="bg-blue text-sm text-white py-3 px-10 rounded-lg">Search</button>
        </div>
     

     </div>

</div>

  )
}

export default Hero
