import React from "react";
import Header from "../components/layout/header/Header";
import Layout from "../components/layout/layout/Layout";
import HowTo from "../components/info/HowTo/HowTo";

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
