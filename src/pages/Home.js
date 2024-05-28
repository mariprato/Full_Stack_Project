import React from "react";
import Header from "../components/layout/header/header";
import Layout from "../components/layout/Layout";
import HowTo from "../components/info/HowTo";

const Home = () => {
  return (
    <>
      <Layout>
        <Header />
        <HowTo />
      </Layout>
    </>
  );
};

export default Home;
