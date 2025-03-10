import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link, Outlet, useLocation } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../assets/styles/components/equipments.css"; // Add your styles here

export default function Equipments() {
  const location = useLocation();

  // State to manage the visibility of submenus
  // const [isWasherExtractor, setIsWasherExtractor] = useState(false);
  const [isDumbleDryer, setIsDumbleDryer] = useState(false);

  // Toggles
  // const toggleOption1 = () => setIsWasherExtractor(!isWasherExtractor);
  const toggleOption2 = () => setIsDumbleDryer(!isDumbleDryer);

  // Check active links for styling
  const isActive = (path) => location.pathname.includes(path);

  // Check if submenu links are active
  const isSubMenuActive = (option) => {
    return (
      location.pathname.includes(option) ||
      location.pathname.includes(`${option}/submenu1`) ||
      location.pathname.includes(`${option}/submenu2`) ||
      location.pathname.includes(`${option}/submenu3`)
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
          <Col md="3" className="equipment-box mb-4">
            <h4>Equipment List</h4>
            <ul>
              {/* Option 1 */}
              <li
                className={`${
                  isSubMenuActive("washer_extractor") ? "active-link" : ""
                }`}
                // onClick={toggleOption1}
              >
                <Link
                  to="washer_extractor"
                  className={`nav-link ${
                    isActive("/washer_extractor") ? "active" : ""
                  }`}
                >
                  <span>Washer Extractors</span>
                  <i
                    className="bi-arrow-right-circle"
                    style={{ marginLeft: "10px" }}
                  ></i>
                </Link>

                {/* <i
                  className={`bi ${
                    isWasherExtractor
                      ? "bi-arrow-down-circle"
                      : "bi-arrow-right-circle"
                  }`}
                  style={{ marginLeft: "10px" }}
                ></i> */}
              </li>
              {/* Submenu for Option 1 */}
              {/* <Collapse isOpen={isWasherExtractor}>
                <ul className="sub-menu ms-3">
                  <li>
                    <Link
                      to="washer_extractor?brand=kannegiesser"
                      className={`nav-link ${
                        isActive("/washer_extractor/kannegiesser")
                          ? "active"
                          : ""
                      }`}
                    >
                      Kannegiesser
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="washer_extractor?brand=natronic"
                      className={`nav-link ${
                        isActive("/washer_extractor/natronic") ? "active" : ""
                      }`}
                    >
                      Natronic
                    </Link>
                  </li>
                </ul>
              </Collapse> */}

              {/* Option 2 */}
              <li
                className={`${
                  isSubMenuActive("dumble_dryer") ? "active-link" : ""
                } mt-3`}
              >
                <Link
                  to="dumble_dryer"
                  className={`nav-link ${
                    isActive("/dumble_dryer") ? "active" : ""
                  }`}
                >
                  <span>Dumble Dryer</span>

                  <i
                    className="bi-arrow-right-circle"
                    style={{ marginLeft: "10px" }}
                  ></i>
                </Link>
              </li>
              <li
                className={`${
                  isSubMenuActive("dry_cleaning_machines") ? "active-link" : ""
                } mt-3`}
              >
                <Link
                  to="dry_cleaning_machines"
                  className={`nav-link ${
                    isActive("/dry_cleaning_machines") ? "active" : ""
                  }`}
                >
                  <span>Dry Cleaning Machines</span>

                  <i
                    className="bi-arrow-right-circle"
                    style={{ marginLeft: "10px" }}
                  ></i>
                </Link>
              </li>
              <li
                className={`${
                  isSubMenuActive("flate_ironing") ? "active-link" : ""
                } mt-3`}
              >
                <Link
                  to="flate_ironing"
                  className={`nav-link ${
                    isActive("/flate_ironing") ? "active" : ""
                  }`}
                >
                  <span>Flate Ironing</span>

                  <i
                    className="bi-arrow-right-circle"
                    style={{ marginLeft: "10px" }}
                  ></i>
                </Link>
              </li>
              <li
                className={`${
                  isSubMenuActive("garment_finishing") ? "active-link" : ""
                } mt-3`}
              >
                <Link
                  to="garment_finishing"
                  className={`nav-link ${
                    isActive("/garment_finishing") ? "active" : ""
                  }`}
                >
                  <span>Garment Finishing</span>

                  <i
                    className="bi-arrow-right-circle"
                    style={{ marginLeft: "10px" }}
                  ></i>
                </Link>
              </li>
              <li
                className={`${
                  isSubMenuActive("packing_machines") ? "active-link" : ""
                } mt-3`}
              >
                <Link
                  to="packing_machines"
                  className={`nav-link ${
                    isActive("/packing_machines") ? "active" : ""
                  }`}
                >
                  <span>Packing Machines</span>

                  <i
                    className="bi-arrow-right-circle"
                    style={{ marginLeft: "10px" }}
                  ></i>
                </Link>
              </li>
            </ul>
          </Col>

          {/* Main Content Area */}
          <Col md="9" className="equipment-content-area">
            <Outlet />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
