import React from "react";
import fbIcon from "../../assets/icons/fbIcon.svg";
import { FaPhone, FaHome } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import skillIcon from "../../assets/icons/skillIcon.svg";
import downloadIcon from "../../assets/icons/downloadIcon.svg";
import GrayDivider from "./GrayDivider";
import "./left-side-section.css";
import heroImg from "../../assets/heroImage.png"

const LeftSideSection = () => {
  return (
    <aside
      id="left-side-section"
      className="w-1/5 h-screen sticky top-0 left-0 overflow-y-scroll"
    >
      <div className="bg-white p-8 flex flex-col gap-6 justify-center items-center">
        <div className="flex flex-col gap-3.5 justify-center items-center">
          <div className="pb-4">
            <img
              src={heroImg}
              alt=""
              className="w-[150px] h-[150px] rounded-full"
            />
          </div>
          <h1 className="text-base font-bold sc">Full-stack Developer</h1>
          <div className="flex gap-3 justify-center">
            <div className="pbgc w-6 h-6 rounded-full flex justify-center items-center">
              <img className="w-3.5 h-3.5" src={fbIcon} alt="" />
            </div>
            <div className="pbgc w-6 h-6 rounded-full flex justify-center items-center">
              <img className="w-3.5 h-3.5" src={fbIcon} alt="" />
            </div>
            <div className="pbgc w-6 h-6 rounded-full flex justify-center items-center">
              <img className="w-3.5 h-3.5" src={fbIcon} alt="" />
            </div>
            <div className="pbgc w-6 h-6 rounded-full flex justify-center items-center">
              <img className="w-3.5 h-3.5" src={fbIcon} alt="" />
            </div>
          </div>
        </div>
        <GrayDivider />
        <hr className="p-2" />
        {/* Contact Information */}
        <div className="text-sm gray-text flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <div className="pbgc text-white rounded-full w-8 h-8 flex justify-center items-center ">
              <FaPhone className="w-8" />
            </div>{" "}
            <span>+880 1775 646995</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="pbgc text-white rounded-full w-8 h-8 flex justify-center items-center ">
              <SiGmail className="w-8" />
            </div>
            <span>mashod0rana@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="pbgc text-white rounded-full w-8 h-8 flex justify-center items-center ">
              {" "}
              <FaHome className="w-8" />
            </div>
            <span>Azmpur Kacha Bazar, Dakshinkhan, Dhaka-1230, Bandladesh</span>
          </div>
        </div>

        <GrayDivider />

        <div className="flex flex-col gap-1.5">
          <p className="flex gap-2">
            <img className="w-5 h-5" src={skillIcon} alt="" /> Python, Django,
            FastApi, DRF
          </p>
          <p className="flex gap-2">
            <img className="w-5 h-5" src={skillIcon} alt="" /> JavaScript,
            React.js, Node.js
          </p>
          <p className="flex gap-2">
            <img className="w-5 h-5" src={skillIcon} alt="" /> Bootstrap,
            Tailwindcss
          </p>
          <p className="flex gap-2">
            <img className="w-5 h-5" src={skillIcon} alt="" /> Docker, Git,
            Postman
          </p>
          <p className="flex gap-2">
            <img className="w-5 h-5" src={skillIcon} alt="" /> Tensorflow,
            Spacy, NLTK
          </p>
        </div>
        <div>
          <span className="text-sm gray-text">Bsc. in CSE</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm gray-text">Bangla</span>
          <span className="text-sm gray-text">English</span>
          <span className="text-sm gray-text">Hindi</span>
        </div>
        <GrayDivider />
        <div className="flex justify-center items-center">
          <button className="py-2.5 px-10 pbgc flex gap-5 items-center text-white">
            <span className="text-sm font-semibold">RESUME</span>
            <img className="w-4 h-4" src={downloadIcon} alt="" />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default LeftSideSection;
