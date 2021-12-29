import React from "react";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import Error from "../components/Error";

const Error404 = () => {
  return (
    <>
      <NavigationBar />
      <Error />
      <Footer />
    </>
  );
};

export default Error404;
