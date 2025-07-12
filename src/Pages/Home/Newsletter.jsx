import React, { useState } from "react";

const NEWSLETTER_API =
  "https://script.google.com/macros/s/AKfycbw41Vq7J7rbH7p2xxblaTQK0-QF-i2EWN1rM8IG07UdSiWespSZU9XGe19ogL1OcDi2/exec";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !/@/.test(email)) {
      setStatus("invalid");
      return;
    }

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
  };

  return (
    <section className="bg-[#1b1b29] py-20 text-white px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">
          Join Our Newsletter
        </h3>
        <p className="text-gray-400 mb-6">
          We don’t spam. We don’t sell your data. Just pure automation goodness.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="px-5 py-3 rounded-full w-full sm:w-auto text-black outline-none"
          />
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 transition text-white px-6 py-3 rounded-full"
          >
            Subscribe
          </button>
        </form>

        {status === "success" && (
          <p className="text-green-400 mt-4 animate-fadeIn">
            You're now part of the Seyreon family!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-400 mt-4 animate-fadeIn">
            Something went wrong. Please try again later.
          </p>
        )}
        {status === "invalid" && (
          <p className="text-yellow-400 mt-4 animate-fadeIn">
            Please enter a valid email address.
          </p>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
