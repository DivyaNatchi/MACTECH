import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/footer.css";

export default function Footer() {
  return (
    <footer id="footer" className="footer dark-background">
      {/* Footer Top Section */}
      <div className="container footer-top">
        <div className="row gy-4">
          {/* Footer About Section */}
          <div className="col-lg-4 col-md-6 footer-about">
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
          </div>

          {/* Useful Links Section */}
          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <i className="bi bi-chevron-right"></i>
                <a href="#">Home</a>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>
                <a href="/equipments/option1">Equipments</a>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>
                <a href="/services">Services</a>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>
                <a href="/spareparts">Spare Parts</a>
              </li>

              <li>
                <i className="bi bi-chevron-right"></i>
                <a href="/accessories/option1">Accessories</a>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="col-lg-4 col-md-12">
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
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="container copyright text-center mt-4">
        <p>
          © <span>Copyright</span>
          <strong className="px-1 sitename">MACTECH Trading</strong>
          <span>All Rights Reserved</span>
        </p>
        <div className="credits">
          {/* The links in the footer should remain intact */}
          Designed by{" "}
          <a href="https://www.bytesizeitsolutions.com/">
            Byte Size IT Solutions
          </a>
        </div>
      </div>
    </footer>
  );
}
