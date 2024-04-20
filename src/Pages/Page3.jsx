import React from 'react'
import tri from '/page3/tri.png'
import Audi from '/page3/Audi.png'
import mssg from '/page3/mssg.png'
import support from '/page3/support.png'
import user from '/page3/user.png'
import wallet from '/page3/wallet.png'
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
function Page3() {
    gsap.registerPlugin(useGSAP);
const container = useRef();
useGSAP(() => {
  gsap.from(".box", {x: -50,
    opacity: 0,
    duration:1
});
}, { scope: container});
  return (
   <>
   <div ref={container} className="h-full w-full static">
   
    <div className="flex justify-between items-center mt-14"> 
    <div className="static">
        <img
        src={tri}  alt="" />
        <div className='absolute top-[1800px] left-0'>
        <img className='box' src={Audi} alt="" />
        </div>
    </div>

    <div className='w-1/2 place-content-start'>
    <div >
    <button className="text-blue text-lg bg-[#d9e6f5] py-2 px-7 font-semibold rounded-lg cursor-pointer">WHY CHOOSE US</button>
    <h1 className='text-4xl  mt-6'>We offer the best experience <br /> with our rental deals</h1>  
    </div>
    <div className='mt-6'>
        <div className='flex gap-4'>
            <div><img 
            className='bg-bg p-3 rounded-lg'
            src={wallet} alt="" /> </div>
            <div>
                <h2 className="text-lg">Best price guaranteed</h2>
                <p className='text-sm text-txt'>Find a lower price? We’ll refund you 100% <br /> of the difference.</p>
            </div>
        </div>
        <div className='flex gap-4  mt-6'>
            <div><img 
            className='bg-bg p-3 rounded-lg'
            src={user} alt="" /> </div>
            <div>
                <h2 className="text-lg">Experience driver</h2>
                <p className='text-sm text-txt'>Don’t have driver? Don’t worry, we have many <br /> experienced driver for you.</p>
            </div>
        </div>
        <div className='flex gap-4  mt-6'>
            <div><img 
            className='bg-bg p-3 rounded-lg'
            src={support} alt="" /> </div>
            <div>
                <h2 className="text-lg">24 hour car delivery</h2>
                <p className='text-sm text-txt'>Book your car anytime and we will deliver it <br /> directly to you.</p>
            </div>
        </div>
        <div className='flex gap-4 mt-6'>
            <div><img 
            className='bg-bg p-3 rounded-lg'
            src={mssg} alt="" /> </div>
            <div>
                <h2 className="text-lg">24/7 technical support</h2>
                <p className='text-sm text-txt'>Have a question? Contact Rentcars support <br /> any time when you have problem.</p>
            </div>
        </div>
    </div>

    </div>
    </div>
    
   </div>
   
   </>
  )
}

export default Page3
