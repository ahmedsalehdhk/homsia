import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaBed, FaShower, FaCar, FaRuler } from "react-icons/fa";
import ImageSlider from "../components/ImageSlider";
import projects from "../data/db";

export default function Project() {
  var { id } = useParams();
  id = id - 1;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="project flex flex-col lg:flex-row w-sceen">
        <h1 className="px-5 md:px-20 lg:px-40 pt-32 lg:hidden text-3xl">
          {projects[id].title}
        </h1>
        <p className="px-5 md:px-20 lg:px-40 mb-10 lg:hidden text-gray-600">
          {projects[id].address}
        </p>
        <div className="project-info w-full lg:w-1/2 px-5 md:px-20 lg:px-32 py-12 lg:py-32 order-2 lg:order-1">
          <h1 className="hidden lg:block mb-1 text-3xl">
            {projects[id].title}
          </h1>
          <p className="hidden lg:block mb-5 text-gray-600">
            {projects[id].address}
          </p>
          <ul className="flex flex-wrap gap-3 mb-10">
            <li className="flex justify-center items-center gap-1">
              <FaBed />
              {projects[id].bedrooms} Bedrooms
            </li>
            <li className="flex justify-center items-center gap-1">
              <FaShower />
              {projects[id].bathrooms} Bathrooms
            </li>
            <li className="flex justify-center items-center gap-1">
              <FaCar />
              {projects[id].parkings} Parkings
            </li>
            <li className="flex justify-center items-center gap-1">
              <FaRuler />
              {projects[id].sft} sft Area
            </li>
          </ul>
          <p className="mb-5">
            Status:{" "}
            <span className="capitalize text-green-600 font-bold">
              {projects[id].status}
            </span>
          </p>
          <p className="text-justify">{projects[id].description}</p>
        </div>
        <div className="project-images lg:w-1/2 px-5 py-5 lg:px-20 lg:py-32 order-1 lg:order-2 h-full">
          <ImageSlider images={projects[id].images} />
        </div>
      </div>
      <div className="flex justify-center items-start gap-8 px-5 md:px-20 lg:px-40">
        <Link to={"/"}>
          <button className="bg-black hover:bg-gray-800 text-white px-8 py-4 my-12 rounded">
            To Home
          </button>
        </Link>
        <Link to={"/projects"}>
          <button className="bg-black hover:bg-gray-800 text-white px-8 py-4 my-12 rounded">
            To Projects
          </button>
        </Link>
      </div>
    </>
  );
}
