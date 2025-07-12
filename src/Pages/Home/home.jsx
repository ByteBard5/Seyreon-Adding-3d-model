import React from "react";
import HomeHero from "./HomeHero";
import HomeContent from "./HomeContent"; // 👈 Uncomment when ready

const Home = () => {
  return (
    <div className="bg-[#0e0e0e] text-white">
      <HomeHero />
      {<HomeContent />} {/* 👈 Add this when content is ready */}
    </div>
  );
};

export default Home;
