import React from "react";
import Home from "./Home";
import { Switch, Route } from "react-router-dom";
import ServicesPage from "../Pages/ServicesPage";
import About from "../Pages/About";
import ResumePage from "../Pages/ResumePage";
import Works from "../Pages/Works";
import ContactPage from "../Pages/ContactPage";
import Error404 from "../Pages/Error404";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/services" component={ServicesPage}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/resume" component={ResumePage}></Route>
        <Route path="/works" component={Works}></Route>
        <Route path="/contact" component={ContactPage}></Route>
        <Route component={Error404}></Route>
      </Switch>
    </>
  );
};

export default App;
