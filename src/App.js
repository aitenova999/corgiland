import React from "react";
import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import Affiliations from "./sections/Affiliations";
import AboutUs from "./sections/AboutUs";
import Adoption from "./sections/Adoption";
import Contact from "./sections/Contact";
import Margo from "./sections/Margo";
import Hank from "./sections/Hank";
import AboutBreed from "./sections/AboutBreed";
import History from "./sections/History";
import HealthGenetics from "./sections/HealthGenetics";
import Gallery from "./components/Gallery";
import {
  BrowserRouter as Router,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/affiliations" element={<Affiliations />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/adoption" element={<Adoption />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/margo" exact element={<Margo />} />
          <Route path="/hank" exact element={<Hank />} />
          <Route path="/about-breed" exact element={<AboutBreed />} />
          <Route path="/history" exact element={<History />} />

          <Route
            path="/health-and-genetics"
            exact
            element={<HealthGenetics />}
          />
        </Routes>
        {/* <Hero />
        <Affiliations />
        <AboutUs />
        <Adoption />
        <Contact /> */}
        {/* <OurCorgis /> */}
      </div>
    </Router>
  );
};
const Home = () => {
  return (
    <>
      <Hero />

      <Affiliations />
      <AboutUs />
      <Gallery />
      <Adoption />
      <Contact />
    </>
  );
};

export default App;
