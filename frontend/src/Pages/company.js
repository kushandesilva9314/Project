import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Banner from './components/company_banner';

function Company() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkCompanyAuth = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/company/protected", {
          withCredentials: true, 
        });

        if (response.status === 200) {
          setUser(response.data.user);
        }
      } catch (error) {
        console.error("❌ Unauthorized access:", error);
        navigate("/"); 
      }
    };

    checkCompanyAuth();
  }, [navigate]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>

      <Banner/>
    </div>
  );
}

export default Company;
