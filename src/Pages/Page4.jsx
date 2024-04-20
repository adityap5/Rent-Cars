import React from 'react'
import ac from '/page4/ac.png'
import bmw from '/page4/bmw.png'
import door from '/page4/door.png'
import jag from '/page4/jag.png'
import lambo from '/page4/lambo.png'
import r8 from '/page4/r8.png'
import Star from '/page4/Star.png'
import trans from '/page4/trans.png'
import user from '/page4/user.png'
function Page4() {
  return (
    <div className="h-screen w-full ">
      
      <div className="w-full">
        <div className="text-center mt-14 pt-12">
          <button className="text-blue text-lg bg-[#d9e6f5] py-2 px-7 font-semibold rounded-lg cursor-pointer">POPULAR RENTAL DEALS</button>
        </div>
        <div className="text-center mt-8">
          <h1 className="text-4xl">Most popular cars rental deals</h1>
        </div>
      </div>
      <div className="flex justify-between items-center mt-8 px-44">
        <div className='shadow-lg rounded-lg p-5'>
          <div>
            <img src={jag} alt="" />
            <h2 className="">Jaguar XE L P250</h2>
            <div className="flex justify-between items-center text-xs">
              <div className="flex items-center gap-2"><img src={Star} alt="" /> 4.8 </div>
              <p className='text-txt'>(2.436 reviews)</p>
            </div>
          </div>
          <div className='text-xs text-txt mt-2'>
            <div className='flex items-center justify-between '>
              <div className='flex items-center'>
                <img src={user} alt="" /><p>4 Passagers</p>
              </div>
              <div className='flex items-center pr-4'>
                <img src={trans} alt="" /><p>Auto</p>
              </div>
            </div>
            <div className='flex items-center justify-between mt-2'>
              <div className='flex items-center'>
                <img src={ac} alt="" /><p>Air Conditioning</p>
              </div>
              <div className='flex items-center'>
                <img src={door} alt="" /><p>4 Doors</p>
              </div>
            </div>
            <hr className='mt-2' />
            <div className='mt-4'>
              <div className='flex justify-between items-center text-sm'>
                <p>Price</p>
                <p><span className='font-semibold text-black '>$1,800 </span>/day</p>
              </div>
              <div className="text-center mt-3">
                <button className="text-white text-lg bg-blue py-2 px-7 font-semibold rounded-lg cursor-pointer">Rent Now ➡</button>
              </div>
            </div>
          </div>

        </div>
        <div className='shadow-lg rounded-lg p-5'>
          <div>
            <img src={r8} alt="" />
            <h2 className="">Audi R8</h2>
            <div className="flex justify-between items-center text-xs">
              <div className="flex items-center gap-2"><img src={Star} alt="" /> 4.6 </div>
              <p className='text-txt'>(2,036 reviews)</p>
            </div>
          </div>
          <div className='text-xs text-txt mt-2'>
            <div className='flex items-center justify-between '>
              <div className='flex items-center'>
                <img src={user} alt="" /><p>4 Passagers</p>
              </div>
              <div className='flex items-center pr-4'>
                <img src={trans} alt="" /><p>Auto</p>
              </div>
            </div>
            <div className='flex items-center justify-between mt-2'>
              <div className='flex items-center'>
                <img src={ac} alt="" /><p>Air Conditioning</p>
              </div>
              <div className='flex items-center'>
                <img src={door} alt="" /><p>2 Doors</p>
              </div>
            </div>
            <hr className='mt-2' />
            <div className='mt-4'>
              <div className='flex justify-between items-center text-sm'>
                <p>Price</p>
                <p><span className='font-semibold text-black '>$2,100 </span>/day</p>
              </div>
              <div className="text-center mt-3">
                <button className="text-white text-lg bg-blue py-2 px-7 font-semibold rounded-lg cursor-pointer">Rent Now ➡</button>
              </div>
            </div>
          </div>
        </div>
        <div className='shadow-lg rounded-lg p-5'>
          <div>
            <img src={bmw} alt="" />
            <h2 className="">BMW M3</h2>
            <div className="flex justify-between items-center text-xs">
              <div className="flex items-center gap-2"><img src={Star} alt="" /> 4.5 </div>
              <p className='text-txt'>(2,036 reviews)</p>
            </div>
          </div>
          <div className='text-xs text-txt mt-2'>
            <div className='flex items-center justify-between '>
              <div className='flex items-center'>
                <img src={user} alt="" /><p>4 Passagers</p>
              </div>
              <div className='flex items-center pr-4'>
                <img src={trans} alt="" /><p>Auto</p>
              </div>
            </div>
            <div className='flex items-center justify-between mt-2'>
              <div className='flex items-center'>
                <img src={ac} alt="" /><p>Air Conditioning</p>
              </div>
              <div className='flex items-center'>
                <img src={door} alt="" /><p>4 Doors</p>
              </div>
            </div>
            <hr className='mt-2' />
            <div className='mt-4'>
              <div className='flex justify-between items-center text-sm'>
                <p>Price</p>
                <p><span className='font-semibold text-black '>$2,200 </span>/day</p>
              </div>
              <div className="text-center mt-3">
                <button className="text-white text-lg bg-blue py-2 px-7 font-semibold rounded-lg cursor-pointer">Rent Now ➡</button>
              </div>
            </div>
          </div>
        </div>
        <div className='shadow-lg rounded-lg p-5'>
          <div>
            <img src={lambo} alt="" />
            <h2 className="">Lamborghini Huracan</h2>
            <div className="flex justify-between items-center text-xs">
              <div className="flex items-center gap-2"><img src={Star} alt="" /> 4.3 </div>
              <p className='text-txt'>(2,636 reviews)</p>
            </div>
          </div>
          <div className='text-xs text-txt mt-2'>
            <div className='flex items-center justify-between '>
              <div className='flex items-center'>
                <img src={user} alt="" /><p>2 Passagers</p>
              </div>
              <div className='flex items-center pr-4'>
                <img src={trans} alt="" /><p>Auto</p>
              </div>
            </div>
            <div className='flex items-center justify-between mt-2'>
              <div className='flex items-center'>
                <img src={ac} alt="" /><p>Air Conditioning</p>
              </div>
              <div className='flex items-center'>
                <img src={door} alt="" /><p>2 Doors</p>
              </div>
            </div>
            <hr className='mt-2' />
            <div className='mt-4'>
              <div className='flex justify-between items-center text-sm'>
                <p>Price</p>
                <p><span className='font-semibold text-black '>$2,800 </span>/day</p>
              </div>
              <div className="text-center mt-3">
                <button className="text-white text-lg bg-blue py-2 px-7 font-semibold rounded-lg cursor-pointer">Rent Now ➡</button>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="text-center mt-12">
        <button className="text-lg  text-txt border-2 py-2 px-7 font-semibold rounded-lg cursor-pointer">Show all Vehicles ➡</button>
      </div>
      
    </div>

  )
}

export default Page4
