import React from "react";

import fbIcon from "../assets/icons/fbIcon.svg";
import GrayDivider from "../components/GrayDivider";
import { FaPhone, FaHome } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import skillIcon from "../assets/icons/skillIcon.svg";
import rightArrowIcon from "../assets/icons/rightArrowIcon.svg";
import downloadIcon from "../assets/icons/downloadIcon.svg";
import heroImg from "../assets/heroImage.png"

const Home = () => {
  return (
    <div className="bg-[#FBFBFC] flex justify-between ">
      <div className="w-[300px] bg-white px-8 py-12 flex flex-col gap-6 justify-center items-ceter">
        <div className="flex flex-col gap-3.5 justify-center items-center">
          <div className="pb-4">
            <img
              src="https://s3-alpha-sig.figma.com/img/593a/26ab/93f7491bcef5ff23ce04f6eb7279adf7?Expires=1693180800&Signature=k~oh-HrNDZBas-Ft6gYx~N4lrVwoeZHdgTErmfqPcBKfzaLFXxe9dR2oaoaEhLYMzDRqC1vAntFYBv0-869yrVGZoz1aP8ruQ6bhrlvXYmx2zBXAghPEiBpAFnpvwyCFzr9oVsg6PYvVzpIDK0yQu8OGHkJyRdBx8P53Zgug6ahIF3Mtn2kPO9bi9aceSQ2eV-795xs8zPq6ItM~BLZ8TnQkYfijAjYn3UEzM2bnuRcnxUIGpW7eaDhHqBepDdkODQTGIgzg9OgRyURSU41muaFoKInIpD~X27n5~9eHOySyGxLUDI4zm47APQi2EO5gIRMmdlphhifySwKj5H0DEw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
              className="w-[150px] h-[150px] rounded-full"
            />
          </div>
          <h1 className="text-base font-bold sc">Font-end Developer</h1>
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
      <div className="w-[970px]">
        <section className="hero-section w-full flex ">
          <div className="w-1/2 flex flex-col gap-6 ">
            <h1 className="text-2xl pt-24 text-4xl font-bold">
              I’m Mashod Rana
              <br />
              <span className="sc">Full-stack</span> Developer{" "}
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              volutpat feugiat placerat lobortis. Natoque rutrum semper sed
              suspendisse nunc lectus.
            </p>
            <div>
              <button className="flex gap-2 items-center font-medium text-base text-white pbgc px-8 py-4 rounded">
                <span>HIRE ME</span>
                <img src={rightArrowIcon} alt="" />
              </button>
            </div>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <div className="px-12 py-7 bg-white rounded-lg">
              <img className="w-[150px] h-[150px] rounded-full" src={heroImg} alt="" />
            </div>
          </div>
        </section>
      </div>
      <div className="w-[110px]">nav</div>
    </div>
  );
};

export default Home;
