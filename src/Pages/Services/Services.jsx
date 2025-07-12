import React, { useState, useEffect, Suspense } from "react";
import NeuralHexagon from "../../components/NeuralHexagon";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const serviceGroups = [
  {
    title: "AI Assistant",
    desc: "Launch powerful AI Assistants — from website chatbots to smart call assistants — that engage, qualify, support, and convert users 24/7.",
    features: [
      "Lead Magnet Chatbots",
      "Sales Closer Bots",
      "24/7 Support Assistants",
      "AI-Powered Call Assistants",
    ],
    reverse: false,
    link: "/services/ai-assistant",
  },
  {
    title: "Business Automation Workflows",
    desc: "We eliminate manual tasks by automating your entire business process — from CRM updates to customer follow-ups, flawlessly integrated.",
    features: [
      "CRM & Email Integrations",
      "Operations Workflow Builders",
      "Testimonial & Feedback Collection",
    ],
    reverse: true,
    link: "/services/business-automation",
  },
  {
    title: "Growth & Engagement Engines",
    desc: "Skyrocket engagement with gamified systems, loyalty programs, and viral flows that users love to share and interact with.",
    features: ["Referral & Loyalty Automation", "Contest + Viral Flow Bots"],
    reverse: false,
    link: "/services/growth-engines",
  },
  {
    title: "Custom Systems for Unique Needs",
    desc: "Got a crazy idea or specific process? We’ll build your automation system from scratch — tailored perfectly to your business logic.",
    features: ["Architecture from Scratch", "Ongoing Support & Expansion"],
    reverse: true,
    link: "/services/custom-systems",
  },
];

const qualities = [
  {
    title: "Results that Scale",
    text: "Every automation system is built for impact — more leads, higher conversion, and sustainable growth with minimal effort.",
  },
  {
    title: "Seamless Integrations",
    text: "We don't just build bots. We connect Make.com, Voiceflow, GHL, Apps Script, and more — into one unified system.",
  },
  {
    title: "Built Around You",
    text: "We tailor every automation to your exact workflow, saving your team time and making scaling effortless.",
  },
  {
    title: "Fast Turnarounds",
    text: "We work fast. Most systems are live in days, not weeks. Get results without waiting months.",
  },
  {
    title: "Long-Term Support",
    text: "Our team sticks with you. We don’t vanish after delivery — we help iterate and evolve.",
  },
  {
    title: "Call Assistant Expertise",
    text: "We build advanced voice-based assistants that qualify, convert, and follow up — all through smart, human-like conversations.",
  },
  {
    title: "Proactive Issue Handling",
    text: "We monitor, diagnose, and solve issues before they affect your growth or user experience.",
  },
  {
    title: "Privacy & Data Security",
    text: "Seyreon builds with trust — everything is compliant, secure, and private by design.",
  },
  {
    title: "Future-Proof Systems",
    text: "Our automations evolve with your business. Scalable, modular, and adaptable as you grow.",
  },
];

const Services = () => {
  const [hoveringCTA, setHoveringCTA] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="relative text-white pt-0 overflow-hidden bg-gradient-to-br from-[#0d0d14] via-[#13131d] to-[#1b1b29] -mt-[100px]">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-28">
        <div className="absolute inset-0">
          <div className="absolute top-[-20%] left-[-30%] w-[80%] h-[160%] bg-gradient-to-tr from-purple-700 via-indigo-800 to-transparent blur-3xl opacity-40 animate-pulse"></div>
          <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[120%] bg-gradient-to-br from-cyan-500 via-purple-700 to-transparent blur-2xl opacity-30 animate-pulse"></div>
        </div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Everything Seyreon Automates
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-medium">
            We build intelligent automation systems that grow your business,
            save time, and streamline operations — all with zero manual effort.
          </p>
        </div>
      </section>

      {/* SERVICES LIST */}
      {isClient &&
        serviceGroups.map((group, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: group.reverse ? -160 : 160 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.5,
              ease: [0.25, 0.8, 0.25, 1],
              delay: index * 0.2,
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <section className="grid grid-cols-1 md:grid-cols-12 items-center justify-center gap-12 px-4 md:px-10 lg:px-20 py-20">
              <div
                className={`col-span-12 md:col-span-5 flex justify-center ${
                  group.reverse ? "md:order-last" : ""
                }`}
              >
                <div className="w-[320px] h-[320px] rounded-3xl bg-[#1a1a1a]/60 backdrop-blur-md shadow-md hover:shadow-purple-500/20 transition duration-500 p-4 flex items-center justify-center">
                  <Suspense
                    fallback={<div className="text-gray-500">Loading...</div>}
                  >
                    <NeuralHexagon />
                  </Suspense>
                </div>
              </div>
              <div className="col-span-12 md:col-span-7 max-w-xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-semibold text-purple-300 mb-4">
                  {group.title}
                </h2>
                <p className="text-gray-200 mb-4 leading-relaxed">
                  {group.desc}
                </p>
                <ul className="list-disc pl-5 text-gray-400 space-y-1 mb-6">
                  {group.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
                <Link to={group.link}>
                  <button className="glow-button">Explore More</button>
                </Link>
              </div>
            </section>
          </motion.div>
        ))}

      {/* WHY CHOOSE SEYREON */}
      <motion.section
        className="py-24 px-6 text-center max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          Why Big Companies Choose Seyreon
        </h2>
        <div className="grid md:grid-cols-3 gap-10 text-left relative">
          {qualities.map((q, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a]/60 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-purple-500/20 transition transform hover:-translate-y-1 hover:scale-[1.03] duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-purple-300">
                {q.title}
              </h3>
              <p className="text-gray-300">{q.text}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* FINAL CTA */}
      <section
        className="relative py-24 px-6 text-center overflow-hidden transition-all duration-300"
        onMouseEnter={() => setHoveringCTA(true)}
        onMouseLeave={() => setHoveringCTA(false)}
      >
        <AnimatePresence>
          {hoveringCTA && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center -z-10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 0.4, scale: 1.05 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="w-[600px] h-[600px] bg-purple-500 rounded-full blur-[120px] opacity-50"></div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Ready to Start Automating?
        </motion.h2>

        <motion.p
          className="text-lg text-gray-300 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Let’s streamline your operations, boost conversions, and scale with
          confidence — starting today.
        </motion.p>

        <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="relative px-6 py-3 text-lg font-semibold text-white bg-black rounded-lg shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_#a855f7] hover:bg-purple-600"
          >
            <span className="relative z-10">Contact Us</span>
            <span className="absolute inset-0 z-0 rounded-lg bg-purple-600 opacity-20 blur-xl animate-pulse"></span>
          </motion.button>
        </Link>
      </section>
    </div>
  );
};

export default Services;
