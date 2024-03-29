import React from "react";

import MyServices from "../components/MyServices";
import RightMenu from "../components/rightMenu/RightMenu";
import LeftSideSection from "../components/leftSideSection/LeftSideSection";
import HeroSection from "../components/heroSection/HeroSection";
import Price from "../components/price/Price";
import { Skills } from "../components/Skills";
import Projects from "../components/porjects/Projects";
import WorkHistory from "../components/workHistory/WorkHistory";

const Home = () => {
  return (
    <div className="bg-[#FBFBFC] flex justify-between">
      <LeftSideSection />
      <main id="scroll-container" className="w-[70%] mx-auto scroll-container">
        <HeroSection />
        <MyServices />
        <Projects/>
        <WorkHistory/>
      </main>

      <RightMenu />
    </div>
  );
};

export default Home;
