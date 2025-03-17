import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import AdCard from "./components/ad";
import axios from "axios";

function Ads() {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/ads", {
        withCredentials: true,
      })
      .then((response) => setAds(response.data))
      .catch((error) =>
        console.error("Error fetching ads:", error.response || error.message)
      );
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-6 p-6 pt-40 pb-20">
        {ads.map((ad) => (
          <AdCard key={ad._id} ad={ad} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Ads;
