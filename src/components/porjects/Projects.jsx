import React from "react";

import "./projects.css";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="heading-background w-[276px] h-[68px]">
          <h1 className="text-3xl font-bold text-center">Projects</h1>
        </div>
        <p className="w-3/4 text-sm text-center">
          Explore my featured projects, showcasing innovation and expertise in
          diverse web development domains.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-3 gap-4">
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        
      </div>
    </section>
  );
};

export default Projects;
