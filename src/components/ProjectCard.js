import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { FaBed, FaShower, FaCar, FaRuler } from "react-icons/fa";

export default function ProjectCard(props) {


  return (
      <div className="project-card bg-white w-fit min-w-fit h-fit overflow-hidden">
        <div className="image-container relative h-72 w-full overflow-hidden">
          <div
            className="image h-full w-full"
            id={`${props.data.areacode}${props.data.id}1`}
          ></div>
          <p className='absolute top-4 right-4 bg-black/75 text-white text-xs px-2 py-1 rounded uppercase'>{props.data.status}</p>
        </div>
        <div className="text-container p-5">
          <h1 className='font-medium text-lg'>{props.data.title}</h1>
          <p className='font-light text-gray-500 mb-5'>{props.data.address}</p>
          <div className="infoAndButton flex justify-between items-center gap-3">
            <div className="info flex gap-4 text-sm md:text-base">
              <p className='flex justify-center items-center gap-1'>{props.data.bedrooms}<FaBed /></p>
              <p className='flex justify-center items-center gap-1'>{props.data.bathrooms}<FaShower /></p>
              <p className='flex justify-center items-center gap-1'>{props.data.parkings}<FaCar /></p>
              <p className='flex justify-center items-center gap-1 whitespace-nowrap'>{props.data.sft} sft<FaRuler /></p>
            </div>
            <Link to={`/project/${props.data.id}`} key={props.data.id}>
              <button className='bg-black hover:bg-gray-800 text-white py-1 px-2 rounded'>Details</button>
              </Link>
          </div>
        </div>
      </div>
  )
}
