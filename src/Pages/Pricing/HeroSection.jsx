import React from "react";

const HeroSection = () => {
  return (
    <section className="relative text-center max-w-4xl mx-auto h-[calc(100vh+100px)] pt-[100px] flex flex-col justify-center items-center">
      {/* Gradient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-30%] w-[80%] h-[160%] bg-gradient-to-tr from-purple-700 via-indigo-800 to-transparent blur-3xl opacity-40 animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[120%] bg-gradient-to-br from-cyan-500 via-purple-700 to-transparent blur-2xl opacity-30 animate-pulse" />
      </div>

      {/* Content */}
      <h1 className="text-4xl md:text-6xl font-bold z-10 relative mb-4">
        Plans That Scale With You
      </h1>
      <p className="text-lg md:text-xl text-gray-300 font-medium z-10 relative">
        Transparent pricing to match your growth journey — whether you're
        starting out or scaling fast.
      </p>
    </section>
  );
};

export default HeroSection;
