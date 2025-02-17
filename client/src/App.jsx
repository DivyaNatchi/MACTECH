import { React, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"; // The Layout component
import useToggleScrolled from "./hooks/useToggleScrolled";

// Import the page components
import Home from "./pages/Home";
import Equipments from "./pages/Equipments";
import Option1 from "./pages/Equipments/Option1";
import Option2 from "./pages/Equipments/Option2";
import Services from "./pages/Services";
import SpareParts from "./pages/SpareParts";
import Accessories from "./pages/Accessories";
import Projects from "./pages/Projects";
import ContactUs from "./pages/ContactUs";

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useToggleScrolled();

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      // once: true,
      mirror: false,
    });
  }, []);

  return (
    <Router basename="/MACTECH/">
      <Routes>
        {/* Parent route with Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="equipments/*" element={<Equipments />}>
            {/* Submenu routes for Equipments */}
            <Route path="option1" element={<Option1 />} />
            <Route path="option2" element={<Option2 />} />
          </Route>
          <Route path="services" element={<Services />} />
          <Route path="spareparts" element={<SpareParts />} />
          <Route path="accessories/*" element={<Accessories />}>
            {/* Submenu routes for Equipments */}
            <Route path="option1" element={<Option1 />} />
            <Route path="option2" element={<Option2 />} />
          </Route>
          {/* <Route path="projects" element={<Projects />} /> */}
          <Route path="contactus" element={<ContactUs />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
