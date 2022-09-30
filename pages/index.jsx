import React from "react";
import Head from "next/head";
import HeroSection from "../components/HeroSection";

const Home = () => {

  return (
    <div className="relative flex min-h-screen flex-col s justify-between items-center  bg-gray-100 dark:bg-gray-900 z-10 overflow-hidden custom-scroll">
      <Head>
        <title>TaskUpp App</title>
        <link rel="icon" href="/taskupp-logo.png" />
      </Head>
      
      <HeroSection />
     
    </div>
  );
};

export default Home;
