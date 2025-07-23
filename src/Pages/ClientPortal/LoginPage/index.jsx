import HeroSection from "./HeroSection";
import InfoSection from "./InfoSection";
import LoginForm from "./LoginForm";

const ClientPortalLoginPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      <InfoSection />
      <LoginForm />
    </div>
  );
};

export default ClientPortalLoginPage;
