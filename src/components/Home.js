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
import BackToTop from "react-back-to-top-button";
import { FaArrowAltCircleUp } from "react-icons/fa";

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
      <BackToTop
        showOnScrollUp
        showAt={100}
        speed={1500}
        easing="easeInOutQuint"
      >
        <span id="backToTop">
          <FaArrowAltCircleUp className="backIcon" />
          {/* Back to top */}
        </span>
      </BackToTop>
      );
    </>
  );
};

export default Home;
