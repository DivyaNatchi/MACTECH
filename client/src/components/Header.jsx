import React, { useState, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
} from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../assets/styles/components/header.css";
import logo from "../assets/img/MAC/MAC_Logo.jpg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Separate dropdown states for Equipments and Accessories
  const [equipmentsDropdownOpen, setEquipmentsDropdownOpen] = useState(false);
  const [accessoriesDropdownOpen, setAccessoriesDropdownOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  // Mobile nav toggle for 'bi-list' and 'bi-x' class toggle
  const mobileNavToogle = () => {
    document.body.classList.toggle("mobile-nav-active");
    const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");
    mobileNavToggleBtn.classList.toggle("bi-list");
    mobileNavToggleBtn.classList.toggle("bi-x");
  };

  // UseEffect to manage event listeners
  useEffect(() => {
    const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");
    const navLinks = document.querySelectorAll("#navmenu a");

    // Add event listener for mobile nav toggle
    mobileNavToggleBtn.addEventListener("click", mobileNavToogle);

    // Hide mobile nav on same-page hash links
    navLinks.forEach((navmenu) => {
      navmenu.addEventListener("click", () => {
        if (document.querySelector(".mobile-nav-active")) {
          mobileNavToogle();
        }
      });
    });

    // Cleanup event listeners on component unmount
    return () => {
      mobileNavToggleBtn.removeEventListener("click", mobileNavToogle);
      navLinks.forEach((navmenu) => {
        navmenu.removeEventListener("click", () => {
          if (document.querySelector(".mobile-nav-active")) {
            mobileNavToogle();
          }
        });
      });
    };
  }, []);

  // Generic function for handling mouse enter and leave
  const handleMouseEnter = (dropdown) => {
    if (dropdown === "equipments") {
      setEquipmentsDropdownOpen(true);
    } else if (dropdown === "accessories") {
      setAccessoriesDropdownOpen(true);
    }
  };

  const handleMouseLeave = (dropdown) => {
    if (dropdown === "equipments") {
      setEquipmentsDropdownOpen(false);
    } else if (dropdown === "accessories") {
      setAccessoriesDropdownOpen(false);
    }
  };

  return (
    <header id="header" className="header d-flex align-items-center">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <NavbarBrand href="#" className="logo d-flex align-items-center">
          {/* Uncomment the line below if you also wish to use an image logo */}
          <img src={logo} alt="MACTECH Logo" />
          {/* <h1 className="sitename">MACTech</h1> */}
        </NavbarBrand>
        {/* Navigation Menu */}
        <Navbar
          expand="lg"
          id="navmenu"
          className={`navmenu ${isOpen ? "show" : ""}`}
        >
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar className="me-auto">
              <NavItem>
                <NavLink
                  tag={Link}
                  to="/"
                  className="nav-link"
                  activeclassname="active"
                >
                  Home
                </NavLink>
              </NavItem>
              {/* Equipments Dropdown (Sub-menu) */}
              <Dropdown
                nav
                inNavbar
                isOpen={equipmentsDropdownOpen}
                toggle={() => {}}
                onMouseEnter={() => handleMouseEnter("equipments")}
                onMouseLeave={() => handleMouseLeave("equipments")}
              >
                <DropdownToggle
                  nav
                  caret
                  tag={NavLink}
                  to="/equipments/washer_extractor"
                  className={
                    window.location.pathname.startsWith("/equipments")
                      ? "active"
                      : ""
                  }
                >
                  Equipments
                </DropdownToggle>
                <DropdownMenu
                  end
                  className={equipmentsDropdownOpen ? "show" : ""}
                >
                  <DropdownItem
                    tag={NavLink}
                    to="/equipments/washer_extractor"
                    className="dropdown-active"
                  >
                    Option 1
                  </DropdownItem>
                  <DropdownItem
                    tag={NavLink}
                    to="/equipments/dumble_dryer"
                    className="dropdown-active"
                  >
                    Option 2
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <NavItem>
                <NavLink tag={Link} to="/services">
                  Services
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/spareparts">
                  Spare Parts
                </NavLink>
              </NavItem>
              {/* Accessories Dropdown (Sub-menu) */}
              <Dropdown
                nav
                inNavbar
                isOpen={accessoriesDropdownOpen}
                toggle={() => {}}
                onMouseEnter={() => handleMouseEnter("accessories")}
                onMouseLeave={() => handleMouseLeave("accessories")}
              >
                <DropdownToggle
                  nav
                  caret
                  tag={NavLink}
                  to="/accessories/option1"
                  className={
                    window.location.pathname.startsWith("/accessories")
                      ? "active"
                      : ""
                  }
                >
                  Accessories
                </DropdownToggle>
                <DropdownMenu
                  end
                  className={accessoriesDropdownOpen ? "show" : ""}
                >
                  <DropdownItem
                    tag={NavLink}
                    to="/accessories/option1"
                    activeclassname="dropdown-active"
                  >
                    Option 1
                  </DropdownItem>
                  <DropdownItem
                    tag={NavLink}
                    to="/accessories/option2"
                    activeclassname="dropdown-active"
                  >
                    Option 2
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <NavItem>
                <Link
                  href="/Mactech_brochure.pdf"
                  target="_blank"
                  download="Mactech_brochure.pdf"
                  title="Download Our Brochure"
                >
                  Brochure
                </Link>
              </NavItem>
              {/* <NavItem>
                <NavLink tag={Link} to="/projects">
                  Projects
                </NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink tag={Link} to="/contactus">
                  Contact Us
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          {/* Mobile Navigation Toggle */}
          <i
            className={`mobile-nav-toggle d-xl-none bi ${
              isOpen ? "bi-x" : "bi-list"
            }`}
            onClick={toggle} // Use toggle state for collapsing menu
          ></i>
        </Navbar>
      </div>
    </header>
  );
}
