import React, { useState } from 'react';
import HeroImage1 from '../assets/Hero1.webp';
import HeroImage2 from '../assets/propmark.webp'; // Import additional images if needed
import '@splidejs/react-splide/css';

const PracticeCard = () => {
  const images = [HeroImage1, HeroImage2]; // Add more images if needed

  // Array containing details for each card corresponding to images
  const cardDetails = [
    {
      title: 'Homsia Practice',
      location: 'Gulshan 1',
      description: ['Beds', 'Baths', 'Parkings', 'sqft.'],
    },
    {
      title: 'Your Next Title',
      location: 'Your Next Location',
      description: ['New Info', 'More Info', 'Additional Info', 'sqft.'],
    },
    // Add more objects with details for additional cards
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleJumpToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="practiceCardbox h-screen w-screen flex flex-row flex-wrap">
      <div className="practiceText h-[30%] w-full">
        {/* Your text content */}
        <div className="textheadline"></div>
        <div className="textDescription"></div>
      </div>
      <div className="cardSection h-[60%] w-full flex flex-row justify-center">
        <div className="prevArrow h-full w-[10%] flex justify-center items-center cursor-pointer" onClick={handlePrev}>
          PA
        </div>
        <div className="middleSection h-full w-[50%] flex justify-center flex-col items-center">
          <div className="practiceCard w-[80%] h-[90%] rounded-lg border-4">
            <div className="practiceCardFiller p-4 h-full">
              <img src={images[activeIndex]} className="imgclipper h-[60%] w-full rounded-md cursor-pointer" alt={`Slide ${activeIndex + 1}`} />
              <div className="projectText py-4">
                <div className="projectTitle h-[40%]">{cardDetails[activeIndex].title}</div>
                <div className="projectLocation h-[20%]">{cardDetails[activeIndex].location}</div>
                <div className="projectDescription h-[40%]">
                  <ul className="features flex gap-2 md:text-lg text-sm">
                    {cardDetails[activeIndex].description.map((info, index) => (
                      <li key={index}>{info}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="navigationButtons w-full h-[10%] text-center">
            {images.map((_, index) => (
              <span
                key={index}
                className={`cursor-pointer ${activeIndex === index ? 'font-bold' : ''}`}
                onClick={() => handleJumpToSlide(index)}
              >
                O
              </span> 
            ))}
          </div>
        </div>
        <div className="nextArrow h-full w-[10%] flex justify-center items-center cursor-pointer" onClick={handleNext}>
          NA
        </div>
      </div>
      <div className="projectsButton h-[10%] w-full flex items-center justify-center">
        <button className="h-[80%] w-28 mb-10">Our All Projects</button>
      </div>
    </div>
  );
};

export default PracticeCard;
