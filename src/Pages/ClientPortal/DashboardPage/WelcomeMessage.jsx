import React from "react";
import PhaseTag from "./ui/PhaseTag";

const WelcomeMessage = ({ name, projectStatus }) => {
  return (
    <div className="-mt-[100px]">
      <section className="relative h-[calc(100vh+100px)] w-full flex flex-col justify-center items-center text-center pt-[100px] text-white bg-gradient-to-br from-[#0d0d14] via-[#13131d] to-[#1b1b29] overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0">
          <div className="absolute top-[-20%] left-[-30%] w-[80%] h-[160%] bg-gradient-to-tr from-purple-700 via-indigo-800 to-transparent blur-3xl opacity-40 animate-pulse"></div>
          <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[120%] bg-gradient-to-br from-cyan-500 via-purple-700 to-transparent blur-2xl opacity-30 animate-pulse"></div>
        </div>

        {/* Status Tag - Bottom Right */}
        <div className="absolute bottom-6 right-6 z-20">
          {projectStatus && <PhaseTag phase={projectStatus} />}
        </div>

        {/* Welcome Text */}
        <div className="relative z-10 w-full max-w-5xl px-4">
          <h1
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
            style={{
              textShadow:
                "0 0 8px rgba(255, 255, 255, 0.8), 0 0 20px rgba(127, 90, 240, 0.8)",
              animation: "glowText 2s ease-in-out infinite alternate",
            }}
          >
            Welcome back {name}!
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-medium">
            We're honored to be part of your journey. As your technology
            partner,{" "}
            <span className="text-purple-400 font-semibold">Seyreon</span>{" "}
            provides clear visibility, reliable support, and access to all key
            resources — so you're always in sync with your project’s success.
          </p>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#1b1b29] z-10 pointer-events-none"></div>
      </section>

      {/* Embedded Keyframes */}
      <style>{`
        @keyframes glowText {
          0% {
            text-shadow: 0 0 6px #fff, 0 0 14px #7f5af0;
          }
          100% {
            text-shadow: 0 0 12px #fff, 0 0 28px #7f5af0;
          }
        }
      `}</style>
    </div>
  );
};

export default WelcomeMessage;
