import React, { useState } from 'react'
import movie from '../db/data.json'
import car from '../assets/car.jpg'
function MovieCard() {

  const [category, setCategory] = useState("")
  return (

    <>
     <div class="flex items-center justify-center select-none font-mono">
	<div class="grid grid-cols-4 gap-4">
		<h1
			class="px-3 py-1 shadow-lg shadow-gray-500/50 bg-black text-white rounded-lg text-[15px] cursor-pointer active:scale-[.97]">
			button</h1>
		<h1
			class="px-3 py-1 shadow-lg shadow-gray-500/50 bg-black text-white rounded-lg text-[15px] cursor-pointer active:scale-[.97]">
			button</h1>
		<h1
			class="px-3 py-1 shadow-lg shadow-gray-500/50 bg-black text-white rounded-lg text-[15px] cursor-pointer active:scale-[.97]">
			button</h1>
		<h1
			class="px-3 py-1 shadow-lg shadow-gray-500/50 bg-black text-white rounded-lg text-[15px] cursor-pointer active:scale-[.97]">
			button</h1>
	</div>
</div>
  <div className="px-32 py-20 bg-gray-100 grid grid-cols-4 gap-4">
  {movie.map((product) => (
    <div
    key={product.title}
    className="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
      <div>
        <img src={product.image === "null" ? car : product.image  } alt=""/>
      </div>
      <div className="py-4 px-4 bg-white">
        <h3 className="text-lg font-semibold text-gray-600">{product.title} </h3>
        <p  className="mt-4 text-lg font-thin">{product.class} </p>
        <p className="mt-4 text-lg font-thin">{product.start_production} </p>
      </div>
    </div>
))}
    </div>
</>
  )
}

export default MovieCard
// {movie.map((product) => (
//     <a key={product.Title} href={product.href} classNameNameName="group">
//       <div classNameNameName="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
//         <img
//           src={product.Poster}
//             alt= "Poster"
//           classNameNameName="h-full w-full object-cover object-center group-hover:opacity-75"
//         />
//       </div>
//       <h3 classNameNameName="mt-4 text-sm text-gray-700">{product.Title}</h3>
//       <p classNameNameName="mt-1 text-lg font-medium text-gray-900">{product.Year}</p>
//     </a>
//   ))}