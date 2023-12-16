import React from "react";
import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import Affiliations from "./sections/Affiliations";
import AboutUs from "./sections/AboutUs";
import Adoption from "./sections/Adoption";
import ContactUs2 from "./sections/ContactUs2";
import Margo from "./sections/Margo";
import Hank from "./sections/Hank";
import AboutBreed from "./sections/AboutBreed";
import History from "./sections/History";
import HealthGenetics from "./sections/HealthGenetics";
import Gallery from "./components/Gallery";
import Footer from "./sections/Footer";
import CurrentLitter from "./sections/CurrentLitter";
import PuppyInformation from "./sections/PuppyInformation";

import {
  BrowserRouter as Router,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import UpcomingLitters from "./sections/UpcomingLitters";
import PageNotFound from "./components/PageNotFound";
import OurProgram from "./sections/OurProgram";
import Waitlist from "./sections/Waitlist";
const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/affiliations" element={<Affiliations />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/adoption" element={<Adoption />} />
        <Route path="/contact" element={<ContactUs2 />} />
        <Route path="/margo" exact element={<Margo />} />
        <Route path="/hank" exact element={<Hank />} />
        <Route path="/about-breed" exact element={<AboutBreed />} />
        <Route path="/our-puppies-program" exact element={<OurProgram />} />
        <Route path="/upcomingLitters" exact element={<UpcomingLitters />} />
        <Route path="/currentLitters" exact element={<CurrentLitter />} />
        <Route path="/history" exact element={<History />} />

        <Route path="/health-and-genetics" exact element={<HealthGenetics />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/waitlist" exact element={<Waitlist />} />
      </Routes>
    </div>
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
      <ContactUs2 />
      <Footer />
    </>
  );
};

export default App;
