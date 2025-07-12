import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import clsx from "clsx";

const NEWSLETTER_API =
  "https://script.google.com/macros/s/AKfycbw41Vq7J7rbH7p2xxblaTQK0-QF-i2EWN1rM8IG07UdSiWespSZU9XGe19ogL1OcDi2/exec";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);
  const [animating, setAnimating] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !/@/.test(email)) {
      setStatus("invalid");
      return;
    }

    setAnimating(true);

    setTimeout(async () => {
      const formData = new FormData();
      formData.append("email", email);

      try {
        const response = await fetch(NEWSLETTER_API, {
          method: "POST",
          body: formData,
        });

        const result = await response.json();

        if (result.status === "success") {
          setStatus("success");
          setEmail("");
        } else {
          setStatus("error");
        }
      } catch (err) {
        console.error("Newsletter error:", err);
        setStatus("error");
      }

      setAnimating(false);
    }, 1800);
  };

  return (
    <section className="bg-[#1b1b29] py-20 text-white px-6">
      <div className="max-w-xl mx-auto text-center animate-scaleIn">
        <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">
          Join Our Newsletter
        </h3>
        <p className="text-gray-400 mb-10 text-base md:text-lg">
          We don’t spam. We don’t sell your data. Just pure automation goodness.
        </p>

        <div className="relative h-[58px] w-full sm:w-auto max-w-xl mx-auto">
          {!status && (
            <form
              onSubmit={handleSubmit}
              className="relative flex items-center w-full transition-all duration-700"
            >
              {/* Input Field */}
              <input
                type="email"
                value={email}
                required
                disabled={animating}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className={clsx(
                  "px-6 py-3 flex-1 rounded-full bg-white/10 text-white placeholder:text-gray-400 outline-none backdrop-blur-md transition-all duration-500",
                  animating ? "opacity-0 scale-95 blur-sm" : "opacity-100"
                )}
              />

              {/* Button */}
              <button
                type="submit"
                disabled={animating}
                className={clsx(
                  "absolute right-0 z-10 px-8 py-3 rounded-full text-white font-medium bg-gradient-to-r from-purple-600 to-indigo-600 shadow-md transition-all duration-300",
                  animating && "animate-vacuum-left"
                )}
              >
                Subscribe
              </button>

              {/* Pixel Dust */}
              {animating && (
                <div className="absolute left-0 w-full h-full pointer-events-none overflow-hidden z-0">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-1 h-1 bg-purple-400 opacity-70 absolute rounded-full animate-dust"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${20 + Math.random() * 40}%`,
                        animationDelay: `${i * 0.1}s`,
                      }}
                    />
                  ))}
                </div>
              )}
            </form>
          )}

          {/* Success message */}
          {status === "success" && (
            <div className="flex justify-center items-center gap-2 mt-6 animate-fadeIn">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <p className="text-green-400 text-lg">
                You're now part of the Seyreon family!
              </p>
            </div>
          )}

          {/* Fallback messages */}
          {status === "error" && (
            <p className="text-red-400 mt-4 animate-fadeIn">
              Something went wrong. Please try again.
            </p>
          )}
          {status === "invalid" && (
            <p className="text-yellow-400 mt-4 animate-fadeIn">
              Please enter a valid email address.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
