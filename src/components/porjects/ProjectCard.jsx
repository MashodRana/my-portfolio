import React from "react";

import checkMarkIcon from "../../assets/projects/checkMark.svg";


const ProjectCard = () => {
  return (
    <div className="relative project">
      <img src="https://i.ibb.co/MDzFY95/watch-house.png" alt="" />
      <div className="project-detail rounded">
        <h4 className="text-md text-center">MR Watch House</h4>
        <p className="text-sm text-center">
          A responsive ecommerce site for selling watches.
        </p>
        <ul className="mt-2 flex flex-wrap justify-between">
          <li className="flex items-center gap-1">
            <img className="w-4 h-4" src={checkMarkIcon} alt="" />
            <span>React.js</span>
          </li>
          <li className="flex items-center gap-1">
            <img className="w-4 h-4" src={checkMarkIcon} alt="" />
            <span>Tailwindcss</span>
          </li>
          <li className="flex items-center gap-1">
            <img className="w-4 h-4" src={checkMarkIcon} alt="" />
            <span>Node.js</span>
          </li>
          <li className="flex items-center gap-1">
            <img className="w-4 h-4" src={checkMarkIcon} alt="" />
            <span>Express.js</span>
          </li>
        </ul>
        <div className="flex justify-around items-center py-2 ">
          <button className="px-4 w-20 py-1 border rounded-full border-white hover:bg-white hover:text-indigo-600 text-medium">
            Git
          </button>
          <button className="px-4 w-20 py-1 border rounded-full border-white hover:bg-white hover:text-indigo-600 text-medium">
            Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
