import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
const FeaturedCard = ({ project }) => {
  if (!project) {
    return console.log("Projects loading");
  } else {
    const featuredProjects = project.filter(
      (project) => project.featured === "yes"
    );
    return (
      <div className="featured-card flex justify-center items-center flex-wrap gap-5 flex-row w-[80%]">
        <Splide
          className="md:w-[50%] gap-5 sm:w-[40%] w-[25%]"
          options={{
            type: "loop",
            perPage: 3,
            focus: "center",
            padding: "5rem",
            rewind: true,
            autoplay: true,
          }}
        >
          {featuredProjects.map((project) => (
            <SplideSlide className="gap-5 md:p-8 p-2" key={project.id}>
              <div className="bg-white basis-3 rounded overflow-hidden gap-5 mb-6">
                <Link to={`/projects/${project.id}`} key={project.id}>
                  <div className="image-clipper overflow-hidden">
                    <div
                      className="featured-images w-full bg-black h-56"
                      key={project.id}
                      id={`fc${project.id}`}
                    ></div>
                  </div>
                  <div className="featured-text py-5 px-7 sm:text-left text-center">
                    <h1 className="font-medium md:text-lg">{project.title}</h1>
                    <p className="text-neutral-500 mb-3">{project.place}</p>
                    <ul className="features flex gap-2 md:text-base text-xs">
                      <li>{project.beds} Beds</li>
                      <li>{project.baths} Baths</li>
                      <li>{project.parkings} Parkings</li>
                      <li>{project.space} sqft.</li>
                    </ul>
                  </div>
                </Link>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    );
  }
};

export default FeaturedCard;
