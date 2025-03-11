import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/protected", {
          method: "GET",
          credentials: "include", 
        });

        const data = await response.json();
        console.log("User Data:", data);

        if (!response.ok || data.user.role !== "admin") {
          navigate("/");
        } else {
          setUserRole(data.user.role);
        }
      } catch (error) {
        console.error("Error fetching user role:", error);
        navigate("/");
      }
    };

    checkAuth();
  }, [navigate]);

  return (
    <div className="flex h-screen bg-gray-100">
      {userRole === "admin" ? (
        <>
          {/* Sidebar */}
          <aside
            className={`bg-gray-800 shadow-md p-6 space-y-6 fixed md:relative h-full w-64 transition-transform ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-64"
            } md:translate-x-0`}
          >
            <h2 className="text-2xl font-bold text-white cursor-pointer">
              <Link to="/">Investo</Link>
            </h2>

            <nav>
              <ul className="space-y-4">
                <li
                  className="text-white font-medium hover:bg-gray-700 p-2 rounded-lg cursor-pointer"
                  onClick={() => navigate("/admin")}
                >
                  Dashboard
                </li>
                <li
                  className="text-gray-300 hover:bg-gray-700 p-2 rounded-lg cursor-pointer"
                  onClick={() => navigate("/investor-admin")}
                >
                  Investor Management
                </li>
                <li
                  className="text-gray-300 hover:bg-gray-700 p-2 rounded-lg cursor-pointer"
                  onClick={() => navigate("/company-admin")}
                >
                  Company Management
                </li>
                <li
                  className="text-gray-300 hover:bg-gray-700 p-2 rounded-lg cursor-pointer"
                  onClick={() => navigate("/content-admin")}
                >
                  Content Management
                </li>
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <div className="flex-1 p-6">
            <div className="md:hidden flex justify-between items-center bg-gray-800 text-white p-4 rounded-md mb-4">
              <h2 className="text-xl font-bold">Investo</h2>
              <button
                className="text-white focus:outline-none"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                ☰
              </button>
            </div>

            <h1 className="text-3xl font-semibold text-gray-800">
              Welcome to the Dashboard
            </h1>
          </div>
        </>
      ) : (
        <p className="text-red-500 text-center mt-20">Unauthorized Access</p>
      )}
    </div>
  );
};

export default Dashboard;
