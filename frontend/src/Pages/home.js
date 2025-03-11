import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Banner from "./components/banner";
import Service from "./components/service";
import Reviews from "./components/review";
import SliderComponent from "./components/slider";

function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/api/protected", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Protected content") {
          console.log("✅ User is authenticated:", data.user);
          setUser(data.user); // ✅ Ensure correct user object
        } else {
          console.log("⛔ User is NOT authenticated");
          setUser(null);
        }
      })
      .catch(error => {
        console.error("Error:", error);
        setUser(null);
      });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      {/* ✅ Pass user to Navbar */}
      <Navbar user={user} />
      <main className="flex-grow w-full px-6 py-20 mt-16 relative">
        <Banner />
        <Service />
        <SliderComponent />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
