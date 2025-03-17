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
    return <div className="text-red-500 text-center p-4 font-semibold">{error}</div>;
  }

  if (!company) {
    return <div className="text-gray-500 text-center p-4 font-semibold">Loading...</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-gray-200 to-gray-400 text-black p-8 rounded-lg shadow-2xl shadow-gray-800 max-w-full w-[90%] mx-auto mb-16 text-left border border-gray-500"
    >
      <div className="space-y-5">
        <div className="flex items-center space-x-6">
          <h2 className="text-lg font-extrabold text-gray-900">Email:</h2>
          <p className="text-md text-gray-800">{company.companyEmail}</p>
        </div>

        <div className="flex items-center space-x-6">
          <h2 className="text-lg font-extrabold text-gray-900">Phone:</h2>
          <p className="text-md text-gray-800">{company.companyPhone}</p>
        </div>

        <div className="flex items-center space-x-6">
          <h2 className="text-lg font-extrabold text-gray-900">Business Owner:</h2>
          <p className="text-md text-gray-800">{company.ownerName}</p>
        </div>

        <div className="flex items-center space-x-6">
          <h2 className="text-lg font-extrabold text-gray-900">Business Type:</h2>
          <p className="text-md text-gray-800">{company.businessType}</p>
        </div>

        <div className="flex items-center space-x-6">
          <h2 className="text-lg font-extrabold text-gray-900">Business Description:</h2>
          <p className="text-md italic text-gray-700">{company.companyDescription}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default CompanyBanner;