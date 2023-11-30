import FeaturedCard from "../components/FeaturedCard";
import HeroCarousel from "../components/HeroCarousel";
import ServicesCard from "../components/ServicesCard";
import useFetch from "../hooks/useFetch";
import Contact from "./Contact";
import { Link } from "react-router-dom";
// import PracticeCard from "../components/PracticeCard";

const Home = () => {
  const {
    data: projects,
    isPending,
    error,
  } = useFetch("http://localhost:8000/projects");

  return (
    <div className="home master-container overflow-x-hidden">
      {/* HERO SECTION */}
      <HeroCarousel />
      {/* FEATURED SECTION */}
      <div className="featured px-3 sm:px-10 md:px-24 lg:px-48 py-20 bg-[#F3F3F3] min-h-fit flex items-center flex-col">
        <div className="featured-text flex flex-col justify-center items-center mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-center capitalize mb-3">
            our featured exclusives
          </h1>
          <p className="text-neutral-500 text-md text-center">
            Searching for your ideal home or commercial property in Bangladesh
            shouldn't be a daunting experience. That's why we're here to assist
            you in finding the perfect property at the right price.
          </p>
        </div>
        <div className="featured-cardBox flex justify-center h-11/12 mb-10">
          <FeaturedCard project={projects} />
        </div>
        <Link to={`/allprojects`}><button className="submit_button text-white h-16 w-40 rounded bg-black mt-4">All Projects</button></Link>
      </div>
      <hr className="hrmain bg-slate-400 h-2 rounded-md"></hr>
      {/* SERVICES SECTION */}
      <div className="services h-fit w-screen flex justify-center flex-col px-3 md:px-24 lg:px-48 py-20 bg-[#F3F3F3]">
        <div className="services_top w-full flex justify-center flex-col">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-center capitalize mb-3">
            Our Services
          </h1>
          <p className="text-neutral-500 text-md text-center mb-5">
            As a premier real estate and development company in Bangladesh, we
            are dedicated to providing a dynamic range of services to our
            clients. We understand the importance of your dreams and the role
            your real estate plays in shaping your future. That's why we're your
            trusted partner, committed to bringing your visions to life and
            helping you create a better tomorrow through our expertise and
            dedication.
          </p>
        </div>
        <div className="serve-cards flex justify-center items-center flex-wrap gap-5 w-full">
          <ServicesCard
            id="card1"
            title="Property Management"
            des="Encompasses a comprehensive management package along with a tenancy application, ensuring a hassle-free year and allowing you to enjoy the rewards of your investment."
          />
          <ServicesCard
            id="card2"
            title="Pricing Strategy"
            des="The conventional market practice of using 'average pricing' consistently leads to vacant overpriced units and underpriced ones failing to achieve their maximum return on investment."
          />
          <ServicesCard
            id="card3"
            title="Financial Reporting"
            des="We promote this interactive media through various channels, including Google AdWords, Social Media, targeted newsletters, and reputable regional platforms."
          />
          <ServicesCard
            id="card4"
            title="Agency & Brokerage Services"
            des="Homsia Properties offers Agency and Brokerage services to a diverse clientele, including landlords, investors, and government authorities."
          />
          <ServicesCard
            id="card5"
            title="Valuation & Advisory Services"
            des="Our Valuation professionals are renowned for their expert guidance on current and future real estate and real estate-related investment values."
          />
          <ServicesCard
            id="card6"
            title="Property Market Research"
            des="Homsia Properties' Market Research Department diligently monitors the property market, keeps up with current conditions, and identifies emerging trends."
          />
        </div>
      </div>
      {/* <PracticeCard/> */}
      <Contact />
    </div>
  );
};

export default Home;
