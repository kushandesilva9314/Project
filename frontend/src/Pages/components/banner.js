import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import businessWoman from "../Assets/bw.png";

const Banner = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/protected", {
          method: "GET",
          credentials: "include", // Ensures cookies are sent
        });

        if (response.ok) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  return (
    <div className="bg-gray-100 py-16 px-6 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center relative">
        {/* Left Section */}
        <motion.div 
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black">
            Unlock the Future of Investment
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-black">
            Our advanced AI-powered platform provides precise predictive analysis 
            to maximize your returns. Leverage data-driven insights, optimize your 
            investment strategies, and make informed financial decisions with confidence.
          </p>
          {/* Show button only if not authenticated */}
          {!isAuthenticated && (
            <div className="mt-6">
              <a href="/start">
                <motion.button 
                  className="bg-gradient-to-r from-purple-600 to-white text-black px-8 py-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition text-lg font-semibold"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started Now
                </motion.button>
              </a>
            </div>
          )}
        </motion.div>

        {/* Right Section - Image */}
        <motion.div 
          className="md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src={businessWoman} 
            alt="Business woman" 
            className="rounded-lg shadow-lg w-82 h-82 object-cover" 
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
