import React, { useState, useRef, useEffect } from "react";
import { BsBuilding } from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const CompanyProfileButton = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center space-x-2 px-3 py-1 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200 transition"
      >
        <BsBuilding className="text-xl" />
        <span>Company Profile</span>
      </button>

      <AnimatePresence>
        {dropdownOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-48 bg-white text-gray-800 shadow-lg rounded-md border border-gray-300"
          >
            <ul className="p-2">
              <li className="p-2 hover:bg-gray-100 cursor-pointer">
                <Link to="/company-profile">Company Profile Management</Link>
              </li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer">
                <Link to="/sales">Sales Management</Link>
              </li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer">
                <Link to="/ads">Ads Management</Link>
              </li>
              <li className="p-2 text-red-500 hover:bg-red-100 cursor-pointer">
                Logout
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CompanyProfileButton;
