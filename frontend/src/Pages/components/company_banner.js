import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const CompanyBanner = () => {
  const [company, setCompany] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompanyDetails = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/company/protected", {
          withCredentials: true,
        });
        console.log("Company Data:", response.data);
        setCompany(response.data.user);
      } catch (err) {
        setError("Failed to load company details");
        console.error("Error fetching company details:", err);
      }
    };

    fetchCompanyDetails();
  }, []);

  if (error) {
    return <div className="text-red-500 text-center p-4">{error}</div>;
  }

  if (!company) {
    return <div className="text-gray-500 text-center p-4">Loading...</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-gray-100 to-gray-300 text-black p-6 rounded-lg shadow-2xl shadow-gray-700 hover:shadow-gray-900 hover:scale-105 transition-all max-w-full w-[96%] mx-auto mb-16 text-left"
    >
      <div className="space-y-3">
        <div className="flex items-center space-x-4">
          <h2 className="text-lg font-bold text-gray-800">Email:</h2>
          <p className="text-md text-gray-700">{company.companyEmail}</p>
        </div>

        <div className="flex items-center space-x-4">
          <h2 className="text-lg font-bold text-gray-800">Phone:</h2>
          <p className="text-md text-gray-700">{company.companyPhone}</p>
        </div>

        <div className="flex items-center space-x-4">
          <h2 className="text-lg font-bold text-gray-800">Business Owner:</h2>
          <p className="text-md text-gray-700">{company.ownerName}</p>
        </div>

        <div className="flex items-center space-x-4">
          <h2 className="text-lg font-bold text-gray-800">Business Type:</h2>
          <p className="text-md text-gray-700">{company.businessType}</p>
        </div>

        <div className="flex items-center space-x-4">
          <h2 className="text-lg font-bold text-gray-800">Business Description:</h2>
          <p className="text-md italic text-gray-600">{company.companyDescription}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default CompanyBanner;
