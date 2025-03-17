import React from "react";
import Banner from "./components/company_banner";
import Profile_sec from "./components/profile_section";
import Footer from "./components/footer";
import Post from "./components/company_post";

function Company() {
  return (
    <div>
      <Profile_sec />
      <Banner />
      <Post/>
      <Footer />
    </div>
  );
}

export default Company;
