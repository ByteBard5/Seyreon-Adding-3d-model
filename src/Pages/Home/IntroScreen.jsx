import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const IntroScreen = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Hide header while video is playing
    const header = document.getElementById("main-header");
    if (header) header.style.display = "none";

    // Save flag so we don’t play it again
    sessionStorage.setItem("alreadyVisitedHome", "true");

    // Navigate to home when video ends
    const handleVideoEnd = () => {
      navigate("/", { replace: true });
    };

    const video = videoRef.current;
    if (video) {
      video.addEventListener("ended", handleVideoEnd);
    }

    return () => {
      if (video) {
        video.removeEventListener("ended", handleVideoEnd);
      }
    };
  }, [navigate]);

  return (
    <div className="h-screen w-screen bg-black overflow-hidden">
      <video
        ref={videoRef}
        src="/heroplaceholder.mp4"
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default IntroScreen;
