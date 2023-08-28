import React from "react";
import GrayDivider from "../leftSideSection/GrayDivider";

const WorkHistory = () => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="heading-background w-[276px] h-[68px]">
          <h1 className="text-3xl font-bold text-center">Work History</h1>
        </div>
        {/* <p className="w-3/4 text-sm text-center">
          Empower your business with our web development, DevOps, web scraping,
          and AI solutions, tailored to your needs. Leverage data through our
          web scraping expertise and stay ahead. Elevate your digital presence
          and efficiency with our integrated services.
        </p> */}
      </div>
      <div className="my-10 bg-white p-6 rounded flex flex-col gap-7">
        <div className="flex ">
          <div className="w-1/3 flex flex-col gap-4">
            <div>
              <h4 className="text-lg font-medium">Software Engineer</h4>
              <h5 className="text-sm text-gray-500">
                IdeaScale | Dhaka, Bangladesh
              </h5>
            </div>
            <p className="flex gap-7 text-xs items-center">
              <span className="">Full-time</span>
              <span className="pbgc px-1 text-white">Apr 2022 - Current</span>
            </p>
          </div>
          <div className="w-3/5">
            <p className="w-full">
              Building an end-to-end recommendation system and exposing the
              service through the rest API.
            </p>
            <div>
              <ul className="list-disc">
                <li>Faster the data preprocessing with faster library</li>
                <li>Reduce time and space by refactoring the code</li>
                <li>
                  Developed as a microservice to integrate with other service
                </li>
                <li>Containerized with docker to deploy in the cloud.</li>
              </ul>
            </div>
            <p>Technologies</p>
            <p>FastApi, Python, implicit, Sqlite, SqlAlchamey, Docker</p>
          </div>
        </div>
        <GrayDivider />
        <div className="flex gap-36">
          <div className="w-1/3 flex flex-col gap-4">
            <div>
              <h4 className="text-lg font-medium">Software Engineer</h4>
              <h5 className="text-sm text-gray-500">
                IdeaScale | Dhaka, Bangladesh
              </h5>
            </div>
            <p className="flex gap-7 text-xs items-center">
              <span className="">Full-time</span>
              <span className="pbgc px-1 text-white">Apr 2022 - Current</span>
            </p>
          </div>
          <div className="">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
              tempore sapiente consequatur et inventore aperiam dolor iste
              soluta impedit nostrum sint placeat expedita voluptate non ad
              ratione beatae, nisi deleniti.
            </p>
          </div>
        </div>
        <GrayDivider />
        <div className="flex gap-36">
          <div className="w-1/3 flex flex-col gap-4">
            <div>
              <h4 className="text-lg font-medium">Software Engineer</h4>
              <h5 className="text-sm text-gray-500">
                IdeaScale | Dhaka, Bangladesh
              </h5>
            </div>
            <p className="flex gap-7 text-xs items-center">
              <span className="">Full-time</span>
              <span className="pbgc px-1 text-white">Apr 2022 - Current</span>
            </p>
          </div>
          <div className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
            tempore sapiente consequatur et inventore aperiam dolor iste soluta
            impedit nostrum sint placeat expedita voluptate non ad ratione
            beatae, nisi deleniti.
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkHistory;
