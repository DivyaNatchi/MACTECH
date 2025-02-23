import React, { useState } from "react";
import { Container, Row, Col, Collapse } from "reactstrap";
import { Link, Outlet, useLocation } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../assets/styles/components/equipments.css"; // Add your styles here

export default function Equipments() {
  const location = useLocation();

  // State to manage the visibility of submenus
  const [isWasherExtractor, setIsWasherExtractor] = useState(false);
  const [isDumbleDryer, setIsDumbleDryer] = useState(false);

  // Toggles
  const toggleOption1 = () => setIsWasherExtractor(!isWasherExtractor);
  const toggleOption2 = () => setIsDumbleDryer(!isDumbleDryer);

  // Check active links for styling
  const isActive = (path) => location.pathname.includes(path);

  // Check if submenu links are active
  const isSubMenuActive = (option) => {
    return (
      location.pathname.includes(option) ||
      location.pathname.includes(`${option}/submenu1`) ||
      location.pathname.includes(`${option}/submenu2`)
    );
  };

  return (
    <section id="equipments-section" className="equipments-section section">
      <div className="container section-title">
        <h2>Our Equipments</h2>
      </div>
      <Container>
        <Row>
          {/* Sidebar for Submenu */}
          <Col md="4" className="equipment-box">
            <h4>Equipment List</h4>
            <ul>
              {/* Option 1 */}
              <li
                className={`${
                  isSubMenuActive("washer_extractor") ? "active-link" : ""
                }`}
                onClick={toggleOption1}
              >
                <Link
                  to="washer_extractor"
                  className={`nav-link ${
                    isActive("/washer_extractor") ? "active" : ""
                  }`}
                >
                  Washer Extractors
                </Link>

                <i
                  className={`bi ${
                    isWasherExtractor
                      ? "bi-arrow-down-circle"
                      : "bi-arrow-right-circle"
                  }`}
                  style={{ marginLeft: "10px" }}
                ></i>
              </li>
              {/* Submenu for Option 1 */}
              <Collapse isOpen={isWasherExtractor}>
                <ul className="sub-menu ms-3">
                  <li>
                    <Link
                      to="washer_extractor/submenu1"
                      className={`nav-link ${
                        isActive("/option1/submenu1") ? "active" : ""
                      }`}
                    >
                      Submenu 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="washer_extractor/submenu2"
                      className={`nav-link ${
                        isActive("/option1/submenu2") ? "active" : ""
                      }`}
                    >
                      Submenu 2
                    </Link>
                  </li>
                </ul>
              </Collapse>

              {/* Option 2 */}
              <li
                className={`${
                  isSubMenuActive("dumble_dryer") ? "active-link" : ""
                } mt-3`}
                onClick={toggleOption2}
              >
                <Link
                  to="dumble_dryer"
                  className={`nav-link ${
                    isActive("/dumble_dryer") ? "active" : ""
                  }`}
                >
                  Dumble Dryer
                </Link>

                <i
                  className={`bi ${
                    isDumbleDryer
                      ? "bi-arrow-down-circle"
                      : "bi-arrow-right-circle"
                  }`}
                  style={{ marginLeft: "10px" }}
                ></i>
              </li>
              {/* Submenu for Option 2 */}
              <Collapse isOpen={isDumbleDryer}>
                <ul className="sub-menu ms-3">
                  <li>
                    <Link
                      to="dumble_dryer/submenu1"
                      className={`nav-link ${
                        isActive("/dumble_dryer/submenu1") ? "active" : ""
                      }`}
                    >
                      Submenu 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="dumble_dryer/submenu2"
                      className={`nav-link ${
                        isActive("/dumble_dryer/submenu2") ? "active" : ""
                      }`}
                    >
                      Submenu 2
                    </Link>
                  </li>
                </ul>
              </Collapse>
            </ul>
          </Col>

          {/* Main Content Area */}
          <Col md="8" className="content-area">
            <Outlet />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
