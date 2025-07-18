import React from "react";
import HeroSection from "./HeroSection";
import PricingCards from "./PricingCards";
import FeatureComparisonSection from "./FeatureComparisonSection";
import FAQ from "./FAQ";

const Pricing = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0d0d14] via-[#13131d] to-[#1b1b29] text-white -mt-[100px] px-4 overflow-x-hidden">
      <HeroSection />
      <PricingCards />
      <FeatureComparisonSection />
      <FAQ />
    </div>
  );
};

export default Pricing;
