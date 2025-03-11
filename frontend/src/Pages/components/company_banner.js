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
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-blue-600 text-white p-6 rounded-lg shadow-lg text-center"
    >
      <h1 className="text-2xl font-bold">{company.companyName}</h1>
      <p className="text-lg">{company.companyEmail}</p>
      <p className="text-md">{company.companyPhone}</p>
      <p className="text-md">Owner: {company.ownerName}</p>
      <p className="text-md">Business Type: {company.businessType}</p>
      <p className="text-sm italic mt-2">{company.companyDescription}</p>
    </motion.div>
  );
};

export default CompanyBanner;
