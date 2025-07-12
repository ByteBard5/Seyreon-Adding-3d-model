import React, { useEffect, useState } from "react";
import { Bot, Zap, CalendarClock, WandSparkles } from "lucide-react";

const words = ["Agency", "Tool", "Platform", "Template"];
const changeInterval = 2000;

const HomeContent = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setFade(true);
      }, 300); // transition duration
    }, changeInterval);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#1b1b29] text-white px-6 pb-20 pt-0 -mt-8">
      {/* SECTION 1: What is Seyreon */}
      <section className="max-w-6xl mx-auto pt-20 text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold text-purple-400 mb-4 animate-textGlow">
          What is Seyreon?
        </h2>

        <h3 className="text-2xl md:text-3xl text-gray-300 font-medium mb-6">
          We are <span className="text-white">not an AI</span>{" "}
          <span
            className={`inline-block transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            } text-purple-400 font-semibold`}
          >
            {words[currentWordIndex]}
          </span>{" "}
          company — we’re your automation partner.
        </h3>

        <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
          Seyreon builds intelligent automation systems that work while you
          sleep — AI chatbots, voice assistants, CRMs, and custom workflows that
          scale your business without the manual grind. Whether it's lead gen,
          support, or engagement — we help you automate and dominate.
        </p>
      </section>

      {/* SECTION 2: Animated Service Overview */}
      <section className="max-w-7xl mx-auto mt-24 px-4">
        <h3 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">
          How We Help You Grow
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-[#1a1a1a]/60 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-purple-500/30 transform transition hover:-translate-y-1 hover:scale-[1.03] duration-300 text-center">
            <Bot className="w-10 h-10 text-purple-400 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-purple-300 mb-2">
              AI Assistants
            </h4>
            <p className="text-gray-300 text-sm">
              Smart bots that talk, listen, qualify leads, and support customers
              24/7.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1a1a1a]/60 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-purple-500/30 transform transition hover:-translate-y-1 hover:scale-[1.03] duration-300 text-center">
            <CalendarClock className="w-10 h-10 text-purple-400 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-purple-300 mb-2">
              Smart Scheduling
            </h4>
            <p className="text-gray-300 text-sm">
              Let your users book calls instantly through integrated bots.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#1a1a1a]/60 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-purple-500/30 transform transition hover:-translate-y-1 hover:scale-[1.03] duration-300 text-center">
            <Zap className="w-10 h-10 text-purple-400 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-purple-300 mb-2">
              Automation Workflows
            </h4>
            <p className="text-gray-300 text-sm">
              CRMs, Sheets, GHL, email — we connect it all to run on autopilot.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#1a1a1a]/60 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-purple-500/30 transform transition hover:-translate-y-1 hover:scale-[1.03] duration-300 text-center">
            <WandSparkles className="w-10 h-10 text-purple-400 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-purple-300 mb-2">
              Custom Systems
            </h4>
            <p className="text-gray-300 text-sm">
              Need something unique? We design tailored automations from
              scratch.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeContent;
