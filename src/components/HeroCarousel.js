import React, { useEffect, useState } from "react";
import heroTexts from "../assets/heroText";

const HeroCarousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const showSlides = () => {
      const slides = document.querySelectorAll(".hero");

      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      setSlideIndex((prevIndex) => (prevIndex % slides.length) + 1);

      slides[
        slideIndex === 0 ? slides.length - 1 : slideIndex - 1
      ].style.display = "block";
    };

    const interval = setInterval(showSlides, 7000); // Change image every 7 seconds

    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts
    };
  }, [slideIndex]);

  return (
    <div className="hero-main h-screen w-screen text-left md:text-center">
      <div className="hero h-screen w-screen" id="hc1">
        <div className="overlay-hero overflow-x-hiddden bg-black/75 h-full w-full flex justify-center items-center fade flex-col px-4 lg:px-48">
          <h2 className="hero-text text-white text-4xl lg:text-5xl font-medium capitalize  mb-3 text-center">
            {heroTexts.text1.header}
          </h2>
          <br></br>
          <br></br>
          <h4 className="hero-text text-white text-sm text-center w-2/3">
            Everyone has dreams and aspirations. At Homsia, we're here to turn
            those dreams into reality. Whether it's starting your own business,
            traveling the world, or achieving a personal goal, our resources and
            support can help you make it happen. Don't let your dreams stay
            dreams; take the first step toward a brighter future today.
          </h4>
        </div>
      </div>
      <div className="hero h-screen w-screen" id="hc2">
        <div className="overlay-hero overflow-x-hiddden bg-black/75 h-full w-full flex justify-center items-center fade flex-col px-4 lg:px-48">
          <h2 className="hero-text text-white text-4xl lg:text-5xl font-medium capitalize mb-3 text-center">
            {heroTexts.text2.header}
          </h2>
          <br></br>
          <br></br>
          <h4 className="hero-text text-white text-sm text-center w-2/3">
            At Homsia, we understand the importance of securing your financial
            future. Our expert team is dedicated to helping you make wise
            investment choices, whether it's for retirement, education, or any
            other long-term goal. With our guidance and financial expertise, you
            can take confident steps towards a more secure tomorrow.
          </h4>
        </div>
      </div>
      <div className="hero h-screen w-screen" id="hc3">
        <div className="overlay-hero overflow-x-hiddden bg-black/75 h-full w-full flex justify-center items-center fade flex-col px-4 lg:px-48">
          <h2 className="hero-text text-white text-4xl lg:text-5xl font-medium capitalize mb-3 text-center">
            {heroTexts.text3.header}
          </h2>
          <br></br>
          <br></br>
          <h4 className="hero-text text-white text-sm text-center w-2/3">
            When it comes to buying or selling your home, you deserve nothing
            but the best. That's why Homsia Properties Ltd is committed to
            providing exceptional service. Our team of experienced professionals
            will go above and beyond to ensure you find the perfect home or sell
            your property with ease. Your dream home awaits you, and we're here
            to make it a reality.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
