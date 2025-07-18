import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);

  const faqs = [
    {
      question: "Can I switch plans later?",
      answer:
        "Absolutely! You can upgrade or downgrade your plan anytime based on your needs.",
    },
    {
      question: "What is included in the Basic Plan?",
      answer:
        "The Basic Plan includes lead gen chatbot, basic support bot, monthly performance report, and basic analytics.",
    },
    {
      question: "Is support available for all plans?",
      answer:
        "Yes, but the level of support varies — higher-tier plans offer priority and dedicated support.",
    },
    {
      question: "What integrations are supported?",
      answer:
        "We support CRM, WhatsApp, Social Media Platforms, Google Calendar, GHL, Make.com, and more depending on the plan.",
    },
    {
      question: "Can I white-label your solution?",
      answer:
        "Yes, Standard and Advanced plans include basic and advanced white-labeling features.",
    },
    {
      question: "What is a Voice Assistant in your plans?",
      answer:
        "Voice Assistants are AI-powered bots that can handle interactions through voice commands.",
    },
    {
      question: "Do you provide onboarding or training?",
      answer:
        "Yes, especially for Advanced and Custom plans. We ensure your team is fully onboarded.",
    },
    {
      question: "What is SLA Agreement in the Custom plan?",
      answer:
        "It ensures performance guarantees, support timelines, and uptime commitments for enterprise clients.",
    },
    {
      question: "Can I get a demo before purchasing?",
      answer:
        "Absolutely, just contact us and we’ll schedule a personalized demo.",
    },
    {
      question: "Is there a setup fee?",
      answer: "Yes it is. Setup fee apply for every plans.",
    },
    {
      question: "How does the Performance Report work?",
      answer:
        "You’ll receive monthly insights into user interactions, leads, and conversion metrics.",
    },
    {
      question: "What is the difference between monthly and yearly pricing?",
      answer:
        "Yearly plans offer a discounted rate compared to monthly billing. It’s more cost-effective if you plan to stay long-term.",
    },
    {
      question: "Can bots book appointments for my clients?",
      answer:
        "Yes, the Standard plan includes an appointment booking bot with calendar sync.",
    },
    {
      question: "What is A/B testing?",
      answer:
        "It allows you to test different flows or messages to optimize performance.",
    },
    {
      question: "How secure is your automation platform?",
      answer:
        "We follow industry-standard encryption and offer compliance features in Advanced and Custom plans.",
    },
    {
      question: "Do you offer custom automation solutions?",
      answer:
        "Yes. Our Custom plan is designed for businesses with unique workflows or integration needs. Contact us for a tailored solution.",
    },
    {
      question: "Can I migrate my old bot to your platform?",
      answer: "Yes, migration support is included in the Custom plan.",
    },
    {
      question: "Do you offer agency white-label partnerships?",
      answer:
        "Yes, our Custom plan offers complete white labeling including branding and dashboard customization.",
    },
    {
      question: "Is there onboarding support available?",
      answer:
        "All plans include onboarding assistance, with higher-tier plans receiving priority and in-depth guidance.",
    },
  ];

  const plans = [
    {
      title: "Basic",
      priceMonthly: 99,
      priceYearly: 79,
      features: [
        "Lead Gen Chatbot",
        "Basic Support Bot",
        "Monthly Performance Report",
        "Basic Analytics Dashboard",
        "Standard Email Integration",
        "Entry-Level Automation Setup",
      ],
      popular: false,
    },
    {
      title: "Standard",
      priceMonthly: 149,
      priceYearly: 129,
      features: [
        "Everything in Basic",
        "Appointment Booking Bot",
        "CRM Integration",
        "Google Calendar & WhatsApp Sync",
        "Advanced Lead Filtering",
        "Voice Assistant (1 Language)",
        "Team Collaboration Tools",
        "Brand Styling Options",
        "Basic White Labeling",
      ],
      popular: true,
    },
    {
      title: "Advanced",
      priceMonthly: 229,
      priceYearly: 199,
      features: [
        "Everything in Standard",
        "Custom System Architecture",
        "AI-Powered Voice Assistants",
        "GHL + Make Integration",
        "A/B Testing + Insights Dashboard",
        "Dedicated Automation Engineer",
        "Priority Support",
        "Advanced White Labeling",
      ],
      popular: false,
    },
    {
      title: "Custom",
      priceMonthly: null,
      priceYearly: null,
      features: [
        "Everything in Advanced",
        "Unlimited Bot Assistants",
        "Full-Scale Voice + Chat Combo Systems",
        "Enterprise-Grade Backend Automation",
        "Custom Branding & Dashboards",
        "Team Training & Onboarding",
        "Migration Support",
        "SLA Agreement",
        "Complete White Labeling",
      ],
      popular: false,
    },
  ];

  const comparisonFeatures = [
    "Lead Gen & Support Chatbot",
    "Voice Assistant Integration",
    "Custom Calendar Booking",
    "WhatsApp & Email Followups",
    "CRM & GHL Automation",
    "Real-Time Analytics",
    "A/B Testing",
    "Team Collaboration Dashboard",
    "Advanced Lead Filtering",
    "Ongoing Support",
    "Dedicated Automation Engineer",
    "White Labeling",
    "SLA & Compliance Features",
  ];

  const comparisonMatrix = [
    [true, false, false, true],
    [false, true, true, true],
    [false, true, true, true],
    [true, true, true, true],
    [false, true, true, true],
    [false, true, true, true],
    [false, false, true, true],
    [false, true, true, true],
    [false, true, true, true],
    [false, true, true, true],
    [false, false, true, true],
    [false, true, true, true],
    [false, false, false, true],
  ];

  const getFeatureIcon = (included) => (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`font-bold ${included ? "text-emerald-400" : "text-gray-600"}`}
    >
      {included ? "✓" : "—"}
    </motion.span>
  );

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0d0d14] via-[#13131d] to-[#1b1b29] text-white -mt-[100px] px-4 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative text-center max-w-4xl mx-auto h-[calc(100vh+100px)] pt-[100px] flex flex-col justify-center items-center">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-30%] w-[80%] h-[160%] bg-gradient-to-tr from-purple-700 via-indigo-800 to-transparent blur-3xl opacity-40 animate-pulse"></div>
          <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[120%] bg-gradient-to-br from-cyan-500 via-purple-700 to-transparent blur-2xl opacity-30 animate-pulse"></div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold z-10 relative mb-4">
          Plans That Scale With You
        </h1>
        <p className="text-lg md:text-xl text-gray-300 font-medium z-10 relative">
          Transparent pricing to match your growth journey — whether you're
          starting out or scaling fast.
        </p>
      </section>

      {/* Toggle and Pricing Cards */}
      <section className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex rounded-full border border-purple-600 overflow-hidden shadow-md">
            <motion.button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 transition text-sm md:text-base font-medium ${
                !isYearly ? "bg-purple-600 text-white" : "text-purple-400"
              }`}
              whileTap={{ scale: 0.95 }}
            >
              Monthly
            </motion.button>
            <motion.button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 transition text-sm md:text-base font-medium ${
                isYearly ? "bg-purple-600 text-white" : "text-purple-400"
              }`}
              whileTap={{ scale: 0.95 }}
            >
              Yearly
            </motion.button>
          </div>
        </motion.div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 overflow-visible transform-gpu">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              whileHover={{
                scale: 1.02,
                y: -10,
                boxShadow: "0px 25px 50px rgba(128, 90, 213, 0.3)",
              }}
              className="relative rounded-2xl border border-purple-800/30 backdrop-blur-lg bg-white/5 p-8 overflow-hidden group flex flex-col justify-between transition-all duration-500 ease-out transform-gpu"
              style={{ willChange: "transform", transformStyle: "preserve-3d" }}
            >
              {plan.popular && (
                <div className="absolute top-4 right-4 bg-purple-700 text-xs font-semibold px-3 py-1 rounded-full z-10 animate-pulse shadow-md ring-1 ring-purple-400/30">
                  Most Popular
                </div>
              )}

              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition duration-1000">
                <div className="absolute -inset-2 bg-gradient-to-r from-white/10 via-white/5 to-transparent blur-xl rotate-12 animate-[shine_2s_linear_infinite]"></div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-purple-300 mb-4">
                  {plan.title}
                </h3>
                <div className="text-4xl font-extrabold mb-4">
                  {plan.priceMonthly ? (
                    <>
                      ${isYearly ? plan.priceYearly : plan.priceMonthly}
                      <span className="text-base font-medium text-gray-400 ml-1">
                        /mo
                      </span>
                    </>
                  ) : (
                    <span className="text-lg text-gray-400 font-medium">
                      Custom Pricing
                    </span>
                  )}
                </div>
                <ul className="text-gray-300 space-y-2 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i}>• {feature}</li>
                  ))}
                </ul>
              </div>

              <Link to="/contact">
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  className="mt-auto w-full py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition"
                >
                  Contact Us
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Feature Comparison Section */}
      <section className="max-w-6xl mx-auto py-24">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-purple-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Detailed Feature Breakdown
        </motion.h2>
        <motion.div
          className="overflow-x-auto rounded-xl border border-purple-800/30 backdrop-blur-xl shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <table className="w-full text-sm md:text-base text-left text-white">
            <thead className="bg-[#1b1b29] text-purple-300">
              <tr>
                <th className="px-6 py-4 font-semibold">Feature</th>
                {plans.map((p, i) => (
                  <th key={i} className="px-6 py-4 font-semibold text-center">
                    {p.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-[#12121b]/60 divide-y divide-purple-800/20">
              {comparisonFeatures.map((feature, i) => (
                <tr key={i} className="text-gray-300">
                  <td className="px-6 py-4 whitespace-nowrap">{feature}</td>
                  {comparisonMatrix[i].map((included, j) => (
                    <td key={j} className="px-6 py-4 text-center font-bold">
                      {getFeatureIcon(included)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto py-20 px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-10 text-purple-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="border border-purple-700/40 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
                className="w-full text-left px-6 py-4 bg-[#1b1b29] text-white font-medium flex justify-between items-center"
              >
                {faq.question}
                <span>{activeFAQ === index ? "−" : "+"}</span>
              </button>
              {activeFAQ === index && (
                <motion.div
                  className="px-6 py-4 text-gray-300 bg-[#12121b]"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Pricing;
