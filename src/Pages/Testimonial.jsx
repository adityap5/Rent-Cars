import React from 'react'
import boy from '/testimonials/boy.png'
import girl from '/testimonials/girl.png'
import left from '/testimonials/left.png'
import right from '/testimonials/right.png'
import Star from '/page4/Star.png'

function Testimonial() {
    return (
        <div className="h-screen w-full static">
            <div className="static">
                <img className="absolute left-[100px]"
                    src={left} alt="" />
                <img src={right} className="absolute left-[1100px]" alt="" />
            </div>
            <div className="w-full">
                <div className="text-center mt-8 pt-8">
                    <button className="text-blue text-lg bg-[#d9e6f5] py-2 px-7 font-semibold rounded-lg cursor-pointer">TESTIMONIALS</button>
                </div>
                <div className="text-center mt-8">
                    <h1 className="text-4xl">What peole say about us?</h1>
                </div>
            </div>
            <div className="flex justify-between mt-36 absolute gap-16 mx-12">
                <div className="flex gap-4 shadow-xl rounded-lg ">
                    <div >
                        <img className="w-72"
                            src={boy} alt="" />
                    </div>
                    <div className="px-8">
                        <div className="flex items-baseline">
                            <h1 className="text-6xl">5.0</h1> <p>Stars</p>
                        </div>
                        <div className="flex gap-2 mt-3">
                                <img src={Star} alt="" />
                                <img src={Star} alt="" />
                                <img src={Star} alt="" />
                                <img src={Star} alt="" />
                                <img src={Star} alt="" />
                        </div>
                        <div className="mt-8">
                        <p>“I feel very secure when using <br /> caretall's services. Your customer <br /> care team is very enthusiastic and <br /> the driver is always on time.”</p>
                    </div>
                    <div className='mt-12'>
                        <h1 className='text-xl font-semibold'>Kalkin Johnson</h1>
                        <p className='text-xs text-txt'>From New Delhi, In</p>
                    </div>
                    </div>
                   
                </div>
                <div className="flex gap-4 shadow-xl rounded-lg ">
                    <div >
                        <img className="w-72"
                            src={girl} alt="" />
                    </div>
                    <div className="px-8">
                        <div className="flex items-baseline">
                            <h1 className="text-6xl">4.8</h1> <p>Stars</p>
                        </div>
                        <div className="flex gap-2 mt-3">
                                <img src={Star} alt="" />
                                <img src={Star} alt="" />
                                <img src={Star} alt="" />
                                <img src={Star} alt="" />
                                <img src={Star} alt="" />
                        </div>
                        <div className="mt-8">
                        <p>“I feel very secure when using <br /> caretall's services. Your customer <br /> care team is very enthusiastic and <br /> the driver is always on time.”</p>
                    </div>
                    <div className='mt-12'>
                        <h1 className='text-xl font-semibold'>Alia Chabra</h1>
                        <p className='text-xs text-txt'>From Jaipur, In</p>
                    </div>
                    </div>
                   
                </div>
              
            </div>

        </div>
    )
}

export default Testimonial
