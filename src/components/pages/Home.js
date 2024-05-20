import React from "react";
import Navbar from "../layout/navbar";
import Header from "../layout/header";
import Footer from "../layout/footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div>
        <h1>This is the home page</h1>
      </div>
      <Footer />
    </>
    
  );
};

export default Home;
