import React from "react";
import Hero from "./HomeComponents/Hero";
import HomeCategory from "./HomeComponents/HomeCategory";
import HomeComponents from "./HomeComponents/HomeComponents";
import HomeSection from "./HomeComponents/HomeSection";
import HomeProject from "./HomeComponents/HomeProject";
import HomePerfrom from "./HomeComponents/HomePerfrom";

const Home = () => {
  return (
   <div>
    <Hero></Hero>
    <HomeCategory></HomeCategory>
    <HomeComponents></HomeComponents>
    <HomeSection></HomeSection>
    <HomeProject></HomeProject>
    <HomePerfrom></HomePerfrom>
   </div>
  );
};

export default Home;
