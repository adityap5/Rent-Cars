import React from 'react'
import logo from '/logo.png'
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
function Navbar() {
  gsap.registerPlugin(useGSAP);
  const container = useRef();
  useGSAP(() => {
    gsap.from(".box", {
      y: -50,
      opacity: 0,
      duration: 1,
      stagger: 1
    });

  }, { scope: container });
  return (
    <div ref={container} className="flex justify-between items-center  text-txt mt-8 m-36 text-sm">
      <div className="w-40"><img src={logo} alt="" /></div>
      <div className='box flex gap-8 justify-between items-center  list-none'>

        <li>Become a renter</li>
        <li>Rental deals</li>
        <li>How it work</li>
        <li>Why choose us</li>

      </div>
      <div className="flex gap-4 justify-between items-center" >
        <p>Sing in</p>
        <button className="bg-blue text-white font-semibold py-3 px-9 rounded-md">Sign up</button>
      </div>
    </div>
  )
}

export default Navbar
