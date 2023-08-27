import React from "react";
import serviceIcon from "../../assets/iconMenu/service.svg";
import blogIcon from "../../assets/iconMenu/blog.svg";
import contactIcon from "../../assets/iconMenu/contact.svg";
import homeIcon from "../../assets/iconMenu/home.svg";
import resumeIcon from "../../assets/iconMenu/resume.svg";

import './right-menu.css'

const RightMenu = () => {
  return (
    <aside className="right-menu w-[6%] h-screen sticky top-0 right-0 flex flex-col justify-center items-center">
      <div className="flex flex-col gap-10">
      <div className="w-10 h-10 rounded-full pbgc flex justify-center items-center">
          <img className="w-4.5 h-4.5" src={homeIcon} alt="" />
        </div>
        <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center">
          <img className="w-4.5 h-4.5" src={serviceIcon} alt="" />
        </div>
        <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center">
          <img className="w-4.5 h-4.5" src={resumeIcon} alt="" />
        </div>
        <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center">
          <img className="w-4.5 h-4.5" src={blogIcon} alt="" />
        </div>
        <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center">
          <img className="w-4.5 h-4.5" src={contactIcon} alt="" />
        </div>
      </div>
    </aside>
  );
};

export default RightMenu;
