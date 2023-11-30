import useFetch from "../hooks/useFetch"
import { Link } from "react-router-dom"

const AllProjects = () => {
  const {
    data: projects,
    error,
    isPending,
  } = useFetch("http://localhost:8000/projects/");
  if (!projects) {
    return console.log("Projects loading");
  }
  return (
    <div className="all-projects px-3 sm:px-10 md:px-24 lg:px-32 py-44 bg-[#F3F3F3] min-h-fit flex items-center flex-col">
      <div className="projects-text flex flex-col justify-center items-center mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-center capitalize mb-3">
          Our Projects
        </h1>
        <p className="text-neutral-500 text-md text-center mb-8">
          Our mission is to simplify your property search by personalizing every
          step. By understanding your requirements, we aim not just to find a
          property but to curate an experience that matches your distinct
          preferences and needs.
        </p>
      </div>
      {/* <hr className="hrmain bg-slate-400 h-2 rounded-md"></hr> */}
      <div className="projects-cardBox flex justify-center h-11/12 mb-10">
        <div className="projects-card flex justify-center items-center flex-wrap gap-10 flex-row">
          {projects.map((project) => (
            <div className="bg-white basis-3 min-w-fit rounded overflow-hidden gap-5">
              <Link to={`/projects/${project.id}`} key={project.id}>
                <div className="image-clipper overflow-hidden">
                  <div
                    className="featured-images w-full bg-black h-56"
                    key={project.id}
                    id={`fc${project.id}`}
                  ></div>
                </div>
                <div className="project-text py-5 px-7">
                  <h1 className="font-medium text-lg">{project.title}</h1>
                  <p className="text-neutral-500 mb-3">{project.place}</p>
                  <ul className="project-info flex gap-2">
                    <li>{project.beds} Beds</li>
                    <li>{project.baths} Baths</li>
                    <li>{project.parkings} Parkings</li>
                    <li>{project.space} sqft.</li>
                  </ul>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
