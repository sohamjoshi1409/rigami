import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useLocation,
} from "react-router-dom";
import Home from "./HomePage.jsx";
import About from "./AboutUs.jsx";
import Contact from "./ContactUs.jsx";
import RecruitmentOutsourcing from "./RecruitmentOutsourcing.jsx";
import ContractStaffing from "./ContractStaffing.jsx";
import TechnologyServices from "./TechnologyServices.jsx";
import ConsultingServices from "./ConsultingServices.jsx";
import Careers from "./Careers.jsx";
import "./App.css";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="app">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
          {/* Link to navigate to HomePage */}
          <NavLink to="/" className="logo-link">
            <img src="/logo.png" alt="Company Logo" className="logo-img" />
          </NavLink>
        </div>
        <nav className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
          >
            Home
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
          >
            About Us
          </NavLink>

          {/* Offerings Dropdown */}
          <div className="dropdown">
            <a className="dropdown-btn">Offerings</a>
            <div className="dropdown-content">
              <NavLink
                to="/recruitment-outsourcing"
                className={({ isActive }) =>
                  isActive ? "active-link" : "nav-link"
                }
              >
                Recruitment Outsourcing
              </NavLink>
              <NavLink
                to="/contract-staffing"
                className={({ isActive }) =>
                  isActive ? "active-link" : "nav-link"
                }
              >
                Contract Staffing
              </NavLink>
              <NavLink
                to="/technology-services"
                className={({ isActive }) =>
                  isActive ? "active-link" : "nav-link"
                }
              >
                Technology Services
              </NavLink>
              <NavLink
                to="/consulting-services"
                className={({ isActive }) =>
                  isActive ? "active-link" : "nav-link"
                }
              >
                Management Consulting Services
              </NavLink>
            </div>
          </div>
          <NavLink
            to="/careers"
            className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
          >
            Careers
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
          >
            Contact Us
          </NavLink>
        </nav>
      </header>

      {/* Routes */}
      <main className={`content ${isHomePage ? "homepage-content" : ""}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route
            path="/recruitment-outsourcing"
            element={<RecruitmentOutsourcing />}
          />
          <Route path="/contract-staffing" element={<ContractStaffing />} />
          <Route path="/technology-services" element={<TechnologyServices />} />
          <Route path="/consulting-services" element={<ConsultingServices />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <div className="footer-marquee">
          <span>
            Simplify to Multiply! Simplify your processes to multiply your
            business growth with <b> RiGaMi </b>
          </span>
        </div>
      </main>
    </div>
  );
}

export default function Main() {
  return (
    <Router>
      <App />
    </Router>
  );
}
