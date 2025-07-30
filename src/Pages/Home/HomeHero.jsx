import React from "react";
import { Link } from "react-router-dom";

const HomeHero = () => {
  return (
    <div className="-mt-[100px] text-white bg-gradient-to-br from-[#0d0d14] via-[#13131d] to-[#1b1b29]">
      {/* HERO SECTION */}
      <section className="relative h-auto lg:h-[calc(100vh+100px)] pt-32 lg:pt-[80px] pb-24 px-6 flex flex-col md:flex-row items-center justify-between overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] left-[-30%] w-[80%] h-[160%] bg-gradient-to-tr from-purple-700 via-indigo-800 to-transparent blur-3xl opacity-40 animate-pulse"></div>
          <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[120%] bg-gradient-to-br from-cyan-500 via-purple-700 to-transparent blur-2xl opacity-30 animate-pulse"></div>

          {/* Bottom Gradient Fade BEHIND content */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#1b1b29] z-0 pointer-events-none"></div>
        </div>

        {/* Left Content with extra spacing */}
        <div className="relative z-10 w-full md:w-1/2 text-left pl-4 md:pl-12 lg:pl-20">
          <h1 className="text-5xl md:text-8xl font-extrabold leading-tight mb-4 animate-textGlow">
            Just Say It
          </h1>
          <p className="text-base md:text-xl text-gray-300 font-medium mb-8">
            Automate anything — from sales to support — with powerful AI bots
            that listen, learn, and take action.
          </p>
          <Link to="/contact">
            <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 text-base md:text-lg font-semibold text-white rounded-xl shadow-lg hover:shadow-purple-500/40 transition-all duration-300">
              Let’s Build Yours →
            </button>
          </Link>
        </div>

        {/* Right Side Placeholder for 3D Model */}
        <div className="w-full md:w-1/2 h-[300px] md:h-full relative z-10 flex items-center justify-center">
          {/* Empty placeholder */}
        </div>
      </section>
    </div>
  );
};

export default HomeHero;
