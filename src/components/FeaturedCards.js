import React from 'react'

import { FaBed, FaShower, FaCar, FaRuler } from "react-icons/fa";

export default function FeaturedCards(projects) {
  return (
    <div className="featuredCards flex justify-center flex-wrap gap-5">
      <div className="card bg-white w-fit min-w-fit h-fit overflow-hidden">
        <div className="image-container relative h-72 w-full overflow-hidden">
          <div className="image h-full w-full" id='exclusive1'></div>
          <p className='absolute top-4 right-4 bg-black/75 text-white text-xs px-2 py-1 rounded'>SOLD</p>
        </div>
        <div className="text-container p-5">
          <h1 className='font-medium text-lg'>Homsia Serene 1</h1>
          <p className='font-light text-gray-500 mb-5'>Plot-15, Road-2, Gulshan 2</p>
          <div className="infoAndButton flex justify-between items-center gap-3">
            <div className="info flex gap-4 text-xs">
              <p className='flex justify-center items-center gap-1'>3<FaBed /></p>
              <p className='flex justify-center items-center gap-1'>3<FaShower /></p>
              <p className='flex justify-center items-center gap-1'>1<FaCar /></p>
              <p className='flex justify-center items-center gap-1 whitespace-nowrap'>3200 sft<FaRuler /></p>
            </div>
            <button className='bg-black hover:bg-gray-800 text-white py-1 px-2 rounded'>Details</button>
          </div>
        </div>
      </div>
      <div className="card bg-white w-fit min-w-fit h-fit">
        <div className="image-container relative h-72 w-full overflow-hidden">
          <div className="image h-full w-full" id='exclusive2'></div>
          <p className='absolute top-4 right-4 bg-black/75 text-white text-xs px-2 py-1 rounded'>SOLD</p>
        </div>
        <div className="text-container p-5">
          <h1 className='font-medium text-lg'>Homsia Serene 1</h1>
          <p className='font-light text-gray-500 mb-5'>Plot-15, Road-2, Gulshan 2</p>
          <div className="infoAndButton flex justify-between items-center gap-3">
            <div className="info flex gap-4 text-xs">
              <p className='flex justify-center items-center gap-1'>3<FaBed /></p>
              <p className='flex justify-center items-center gap-1'>3<FaShower /></p>
              <p className='flex justify-center items-center gap-1'>1<FaCar /></p>
              <p className='flex justify-center items-center gap-1 whitespace-nowrap'>3200 sft<FaRuler /></p>
            </div>
            <button className='bg-black hover:bg-gray-800 text-white py-1 px-2 rounded'>Details</button>
          </div>
        </div>
      </div>
      <div className="card bg-white w-fit min-w-fit h-fit">
        <div className="image-container relative h-72 w-full overflow-hidden">
          <div className="image h-full w-full" id='exclusive1'></div>
          <p className='absolute top-4 right-4 bg-black/75 text-white text-xs px-2 py-1 rounded'>SOLD</p>
        </div>
        <div className="text-container p-5">
          <h1 className='font-medium text-lg'>Homsia Serene 1</h1>
          <p className='font-light text-gray-500 mb-5'>Plot-15, Road-2, Gulshan 2</p>
          <div className="infoAndButton flex justify-between items-center gap-3">
            <div className="info flex gap-4 text-xs">
              <p className='flex justify-center items-center gap-1'>3<FaBed /></p>
              <p className='flex justify-center items-center gap-1'>3<FaShower /></p>
              <p className='flex justify-center items-center gap-1'>1<FaCar /></p>
              <p className='flex justify-center items-center gap-1 whitespace-nowrap'>3200 sft<FaRuler /></p>
            </div>
            <button className='bg-black hover:bg-gray-800 text-white py-1 px-2 rounded'>Details</button>
          </div>
        </div>
      </div>
    </div>
  )
}
