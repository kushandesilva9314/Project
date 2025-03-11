import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Navbar from "./components/navbar"; 
import Footer from "./components/footer";

const MarketNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/market-news");
        setNews(response.data.articles);
      } catch (error) {
        console.error("Error fetching market news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="bg-purple-900 text-white min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* News Section */}
      <div className="pt-20 pb-10 px-6 md:px-20">
        <h1 className="text-4xl font-bold text-center mb-6">📈 Global Market Trends</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <motion.div
              key={index}
              className="bg-white text-gray-900 rounded-2xl shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {article.urlToImage && (
                <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover" />
              )}

              <div className="p-5">
                <h3 className="text-lg font-bold mb-2">{article.title}</h3>
                <p className="text-gray-700 text-sm mb-4">{article.description || "No description available."}</p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
                >
                  Read More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MarketNews;
