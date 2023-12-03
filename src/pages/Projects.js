import useFetch from "../hooks/useFetch";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  
  const {
    data: projects,
    isPending: isPending,
    error: error
  } = useFetch("http://localhost:8000/projects/");
  if (!projects) {
    return console.log("Projects loading");
  }
  
  return (
    <div className="projects px-5 md:px-20 lg:px-40 py-32 bg-[#f3f3f3]">
      <div className="projects-text flex flex-col justify-center items-start mb-10">
        <h1 className="text-4xl mb-8 font-merriweather">Our Projects</h1>
      </div>
      <div className="projects-container flex justify-start items-center flex-wrap gap-3 flex-row">
        {projects.map((project) => {
          return(<ProjectCard data={project}/>)
        })}
      </div>
    </div>
  );
};

export default Projects;
