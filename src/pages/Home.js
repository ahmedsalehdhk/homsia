import { Link } from "react-router-dom"
import { FaRegBuilding, FaMoneyCheckAlt, FaLightbulb, FaQuoteLeft } from "react-icons/fa";

// components
import HeroCarousel from "../components/HeroCarousel";
import ProjectCard from "../components/ProjectCard";
import Contact from "./Contact";

// custom hooks
import useFetch from "../hooks/useFetch";


const Home = () => {
  const {
    data: projects,
    // isPending,
    // error,
  } = useFetch("http://localhost:8000/projects");

  return (
    <div className="home master-container overflow-x-hidden" id="home">
      {/* HERO SECTION */}
      <HeroCarousel />

      {/* FEATURED SECTION */}
      <div className="featured flex flex-col justify-center items-center px-5 md:px-20 lg:px-40 py-32 bg-[#f3f3f3]" id="featured">
        <h1 className="text-5xl mb-5" id="header">Our Featured Exclusives</h1>
        <p className="text-gray-700 font-light mb-12">Discover unparalleled real estate opportunities with our featured exclusives—crafted to elevate your property search and provide unique investment prospects.</p>
        <div className="featured-cards flex justify-center flex-wrap gap-5 mb-16">
          {projects && projects.map((project) => {
              if(project.featured === true){
                return (
                  <ProjectCard data={project}/>
                )
              }
            })
          }
        </div>
        <Link to={"/projects"}><button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded">All Projects</button></Link>
      </div>

      <hr className="bg-white h-5"></hr>

      {/* SERVICES SECTION */}
      <div className="services px-5 md:px-20 lg:px-40 py-32 bg-[#f3f3f3]" id="services">
        <h1 className="text-5xl mb-12" id="header">Our Services</h1>
        <div className="service-cards flex flex-col gap-10 lg:flex-row justify-between items-start w-full">
          <div className='service-card flex flex-col justify-start items-start w-full lg:w-1/3'>
            <div className="title flex gap-3">
              <FaRegBuilding className="text-2xl"/>
              <h1 className='font-medium text-xl mb-3 whitespace-nowrap'>Land Development</h1>
            </div>
            <p className='text-gray-700 font-light text-justify'>Embark on a transformative journey with our land development expertise. Our dedicated team tailors each step, bringing your vision to life sustainably and profitably.</p>
          </div>
          <div className='service-card flex flex-col justify-start items-start w-full lg:w-1/3'>
            <div className="title flex gap-3">
            <FaMoneyCheckAlt className="text-2xl" />
              <h1 className='font-medium text-xl mb-3 whitespace-nowrap'>Sell Apartments</h1>
            </div>
            <p className='text-gray-700 font-light text-justify'>Elevate your property selling experience with our specialized team. Trust us to guide you through a successful sale journey, offering a personalized approach and expert expertise.</p>
          </div>
          <div className='service-card flex flex-col justify-start items-start w-full lg:w-1/3'>
            <div className="title flex gap-3">
              <FaLightbulb className="text-2xl" />
              <h1 className='font-medium text-xl mb-3 whitespace-nowrap'>Real Estate Consultancy</h1>
            </div>
            <p className='text-gray-700 font-light text-justify'>Navigate a personalized real estate journey with our consultancy service. Our dedicated team provides expert guidance, ensuring decisions align seamlessly with your goals and aspirations.</p>
          </div>
        </div>
      </div>

      <hr className="bg-white h-5"></hr>

      {/* TAGLINE */}
      <div className="tagline flex flex-col justify-center items-center gap-2 py-32 px-5 bg-[#f3f3f3]">
        <FaQuoteLeft className="text-4xl" />
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-medium text-[#1b1b1b] text-center" id="header">Your <span className="border-b-4 border-blue-600">Blueprint</span>  To Better Living</h1>
      </div>

      {/* CONTACT */}
      <Contact />
    </div>
  );
};

export default Home;
