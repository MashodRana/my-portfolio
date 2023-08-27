import React from "react";

import rightArrowIcon from "../../assets/icons/rightArrowIcon.svg";
import dockerIcon from "../../assets/icons/dockerIcon.svg";
import gitIcon from "../../assets/icons/gitIcon.svg";
import heroImg from "../../assets/heroImage.png";

const HeroSection = () => {
  return (
    <div className="scroll-area hero-section w-full flex ">
      <div className="w-1/2 flex flex-col gap-6">
        <h1 className="text-2xl pt-24 text-4xl font-bold">
          I’m Mashod Rana
          <br />
          <span className="sc">Full-stack</span> Developer{" "}
        </h1>
        <p className="w-11/12 text-justify text-sm">
          A versatile full stack developer adept in front-end, back-end
          technologies, and well-versed in DevOps practices. Passionate about
          creating impactful digital solutions that seamlessly integrate
          development and operations for enhanced efficiency and user
          experiences.
        </p>
        <div>
          <button className="flex gap-2 items-center font-medium text-base text-white pbgc px-8 py-4 rounded">
            <span>HIRE ME</span>
            <img src={rightArrowIcon} alt="" />
          </button>
        </div>
      </div>
      <div className="  relative w-1/2 flex justify-center items-center">
        <div className="px-12 py-7 bg-[#FFF] rounded-lg z-0">
          <img
            className="w-[150px] h-[150px] rounded-full z-0"
            src={heroImg}
            alt=""
          />
        </div>
        <span className="absolute px-6 py-4 rounded-2xl top-0 bg-white text-[#5D87A8] text-sm tag-shadow">
          Frontend
        </span>
        <span className="absolute px-6 py-4 rounded-2xl top-8 right-10 bg-white text-[#5D87A8] text-sm z-10 tag-shadow">
          Backend
        </span>
        <span className="absolute px-6 py-4 rounded-2xl bottom-32 left-0 bg-white text-[#5D87A8] text-sm z-10 tag-shadow">
          API Integration
        </span>
        <img className="left-12 top-12 absolute" src={dockerIcon} alt="" />
        <img className="right-24 bottom-14 absolute" src={gitIcon} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
