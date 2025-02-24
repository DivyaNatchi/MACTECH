import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "../assets/styles/components/footer.css";

export default function Footer() {
  return (
    <footer id="footer" className="footer dark-background">
      {/* Footer Top Section */}
      <Container className="footer-top">
        <Row className="gy-4">
          {/* Footer About Section */}
          <Col lg="4" md="6" className="footer-about">
            <a href="#" className="d-flex align-items-center sitename">
              <span>MACTECH Trading</span>
            </a>
            <div className="footer-contact pt-3">
              <p>Al Nayef Souq</p>
              <p>East Industrial Area Road,</p>
              <p>Doha, Qatar</p>
              <p className="mt-3">
                <strong>Phone:</strong> <span>+974 5583 8364</span>
              </p>
              <p>
                <strong>Email:</strong> <span>info@mactechqatar.com</span>
              </p>
            </div>
          </Col>

          {/* Useful Links Section */}
          <Col lg="2" md="3" className="footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <i className="bi bi-chevron-right"></i>
                <Link to="/">Home</Link>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>
                <Link to="/equipments/option1">Equipments</Link>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>
                <Link to="/spareparts">Spare Parts</Link>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>
                <Link to="/accessories/option1">Accessories</Link>
              </li>
            </ul>
          </Col>

          {/* Follow Us Section */}
          <Col lg="4" md="12">
            <div>
              <h4>Follow Us</h4>
              <p>Stay in the Loop! Follow Us for the Latest Trends and News!</p>
              <div className="social-links d-flex">
                <a
                  href="https://www.facebook.com/share/15gwg28PNb/"
                  target="_blank"
                  className="social-icon"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" target="_blank" className="social-icon">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" target="_blank" className="social-icon">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
            <div>
              <a
                href="/MACTECH/Mactech_brochure.pdf"
                target="_blank"
                className="download-button"
              >
                Download Our Brochure
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Footer Bottom Section */}
      <Container className="text-center mt-4">
        <p>
          © <span>Copyright</span>
          <strong className="px-1 sitename">MACTECH Trading</strong>
          <span>All Rights Reserved</span>
        </p>
        <div className="credits pb-3">
          Designed by{" "}
          <a href="https://www.bytesizeitsolutions.com/">
            Byte Size IT Solutions
          </a>
        </div>
      </Container>
    </footer>
  );
}
