import React from "react";

const HeroSection = () => {
  return (
    <div className="-mt-[100px] text-white bg-gradient-to-br from-[#0d0d14] via-[#13131d] to-[#1b1b29]">
      {/* HERO SECTION */}
      <section className="relative h-[calc(100vh+100px)] pt-[100px] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-30%] w-[80%] h-[160%] bg-gradient-to-tr from-purple-700 via-indigo-800 to-transparent blur-3xl opacity-40 animate-pulse"></div>
          <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[120%] bg-gradient-to-br from-cyan-500 via-purple-700 to-transparent blur-2xl opacity-30 animate-pulse"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Welcome to Your Client Portal
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-medium">
            Track your project status, deliverables, deadlines, and more – all
            in one place.
          </p>
        </div>

        {/* Bottom Fade for Smooth Transition */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#1b1b29] z-10 pointer-events-none"></div>
      </section>
    </div>
  );
};

export default HeroSection;
