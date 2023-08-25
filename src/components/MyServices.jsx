import React from "react";

import haedingBackground from "../assets/headingBackgound.png";
import aiIcon from "../assets/services/ai.svg";
import devopsIcon from "../assets/services/devops.png";
import scrapingIcon from "../assets/services/scraping.svg";
import devIcon from "../assets/services/development.svg";

const MyServices = () => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="heading-background w-[276px] h-[68px]">
          <h1 className="text-3xl font-bold text-center">My Services</h1>
        </div>
        <p className="w-3/4">
        Empower your business with our web development, DevOps, web scraping, and AI solutions, tailored to your needs. Leverage data through our web scraping expertise and stay ahead. Elevate your digital presence and efficiency with our integrated services.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4">
          <div className="bg-white rounded-sm flex flex-col justify-center gap-3 items-center p-8">
            <div>
              <img src={devIcon} className="w-16 h-16" alt="" />
            </div>
            <div className="flex flex-col items-center gap-2 mb-8">
              <h2 className="text-lg font-medium">Web Application</h2>
              <p className="text-xs">Blog, E-commerce, Dashboard</p>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="bg-white rounded-sm flex flex-col justify-center gap-3 items-center p-8">
            <div>
              <img src={devopsIcon} className="w-16 h-16" alt="" />
            </div>
            <div className="flex flex-col items-center gap-2 mb-8">
              <h2 className="text-lg font-medium">Devops</h2>
              <p className="text-xs">Deploymnet, Containerization</p>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="bg-white rounded-sm flex flex-col justify-center gap-3 items-center p-8">
            <div>
              <img src={scrapingIcon} className="w-16 h-16" alt="" />
            </div>
            <div className="flex flex-col items-center gap-2 mb-8">
              <h2 className="text-lg font-medium">Web Scraping</h2>
              <p className="text-xs">Scraping, Automation</p>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="bg-white rounded-sm flex flex-col justify-center gap-3 items-center p-8">
            <div>
              <img src={aiIcon} className="w-16 h-16" alt="" />
            </div>
            <div className="flex flex-col items-center gap-2 mb-8">
              <h2 className="text-lg font-medium">AI Solution</h2>
              <p className="text-xs">
                Chatbot, Recommendation, Face Detection
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyServices;
