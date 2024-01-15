import React from 'react'
import useFetch from '../hooks/useFetch';
import { Link, useParams } from 'react-router-dom';
import { FaBed, FaShower, FaCar, FaRuler } from "react-icons/fa";
import ImageSlider from '../components/ImageSlider';

export default function Project() {
    const { id } = useParams();
    const {
        data: projects
    } = useFetch("http://localhost:8000/projects/" + id);

  return (
    <>
    <div className="project flex flex-col lg:flex-row w-sceen min-h-screen">
        <h1 className='px-5 md:px-20 lg:px-40 pt-32 lg:hidden text-3xl'>{projects && projects.title}</h1>
        <p className='px-5 md:px-20 lg:px-40 mb-10 lg:hidden text-gray-600'>{projects && projects.address}</p>
        <div className="project-info w-full lg:w-1/2 px-5 md:px-20 lg:px-40 py-12 lg:py-32 order-2 lg:order-1">
            <h1 className='hidden lg:block mb-1 text-3xl'>{projects && projects.title}</h1>
            <p className='hidden lg:block mb-5 text-gray-600'>{projects && projects.address}</p>
            <ul className="flex flex-wrap gap-3 mb-10">
                <li className="flex justify-center items-center gap-1"><FaBed />{projects && projects.bedrooms} Bedrooms</li>
                <li className="flex justify-center items-center gap-1"><FaShower />{projects && projects.bathrooms} Bathrooms</li>
                <li className="flex justify-center items-center gap-1"><FaCar />{projects && projects.parkings} Parkings</li>
                <li className="flex justify-center items-center gap-1"><FaRuler />{projects && projects.sft} sft Area</li>
            </ul>
            <p className='mb-5'>Status: <span className='capitalize text-green-600 font-bold'>{projects && projects.status}</span></p>
            <p className='text-justify'>{projects && projects.description}</p>
        </div>
        <div className="project-images w-full lg:w-1/2 pr-5 md:pr-20 lg:pr-40 py-32 order-1 lg:order-2 ">
            <ImageSlider images={projects && projects.images}/>
        </div>
    </div>
    <div className="flex justify-center items-start">
        <Link to={"/projects"}>
            <button className="bg-black hover:bg-gray-800 text-white px-8 py-4 my-12 rounded">
            Back to all Projects
            </button>
        </Link>
    </div>
    </>
    
  )
}
