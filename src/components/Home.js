import React from "react";
import AboutUs from "./AboutUs";
import ChatWithUs from "./ChatWithUs";
import Contact from "./Contact";
import Footer from "./Footer";
import NavigationBar from "./NavigationBar";
import OurDesigns from "./OurDesigns";
import Resume from "./Resume/Resume";
import Services from "./Services";
import TrustedName from "./TrustedName";

const Home = () => {
  return (
    <>
      <NavigationBar />
      <TrustedName />
      <Services />
      <OurDesigns />
      <AboutUs />
      <Resume />
      <Contact />
      <ChatWithUs />
      <Footer />
    </>
  );
};

export default Home;
