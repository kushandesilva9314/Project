import { useState } from "react";
import { FaChartLine, FaComments } from "react-icons/fa";

const AdCard = ({ ad }) => {
  const { companyName, businessType, investment, percentage, description } = ad;
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-80 p-4 shadow-lg rounded-2xl border border-gray-300 bg-white">
      {/* Business Name and Type */}
      <div className="flex justify-between font-semibold text-lg mb-2">
        <span>{companyName}</span>
        <span className="text-sm text-gray-500">{businessType}</span>
      </div>

      {/* Investment and Percentage */}
      <div className="flex justify-between text-gray-700 mb-2">
        <span>Investment: ${investment}</span>
        <span>{percentage}% Equity</span>
      </div>

      {/* Description with Read More */}
      <div className="text-sm text-gray-600 mb-3">
        {expanded ? description : `${description.slice(0, 100)}...`}
        {description.length > 100 && (
          <button
            className="text-blue-600 text-xs ml-1 underline"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Read Less" : "Read More"}
          </button>
        )}
      </div>

      {/* Buttons Section */}
      <div className="flex justify-between mt-2">
        <button className="flex items-center bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600">
          <FaChartLine className="mr-2" /> Predict
        </button>
        <button className="flex items-center bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600">
          <FaComments className="mr-2" /> Chat
        </button>
      </div>
    </div>
  );
};

export default AdCard;
