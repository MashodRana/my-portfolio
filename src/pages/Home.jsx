import React from "react";

import fbIcon from "../assets/icons/fbIcon.svg";

const Home = () => {
  return (
    <div className="bg-[#FBFBFC] flex justify-between ">
      <div className="w-[250px] bg-white px-8 py-12 flex flex-col gap-6 justify-center items-ceter">
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
        <hr className="bg-gray-200 h-[1.5px]" />
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
      </div>
      <div className="w-[750px]">
        <h1 className="text-2xl">I’m Rayan Adlrdard Full-stack Developer </h1>
      </div>
      <div className="w-[110px]">nav</div>
    </div>
  );
};

export default Home;
