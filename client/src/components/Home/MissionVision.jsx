import { React } from "react";
import "../../assets/styles/components/home/missionVision.css";

import image1 from "../../assets/img/features-1.svg";
import image2 from "../../assets/img/features-2.svg";

export default function MissionVision() {
  return (
    <section id="features" className="features section light-background">
      <div className="container">
        <div className="container section-title" data-aos="fade-up">
          <h2>Shaping the Future of Laundry Services</h2>
        </div>
        {/* Feature 1 */}
        <div className="row gy-4 align-items-center features-item">
          <div
            className="col-md-5 d-flex align-items-center"
            data-aos="zoom-out"
            data-aos-delay="100"
          >
            <img src={image1} className="img-fluid" alt="Feature 1" />
          </div>
          <div className="col-md-7" data-aos="fade-up" data-aos-delay="100">
            <h3>Our Mission</h3>
            <p className="fst-italic">
              To provide businesses in Qatar and beyond with top-quality laundry
              equipment, exceptional service, and expert solutions. As a dynamic
              startup, we are dedicated to ensuring our clients' success by
              delivering efficient, reliable, and cost-effective laundry systems
              while maintaining a focus on innovation and customer satisfaction.
            </p>
            {/* <ul>
              <li>
                <i className="bi bi-check"></i>
                <span>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </span>
              </li>
              <li>
                <i className="bi bi-check"></i>
                <span>
                  Duis aute irure dolor in reprehenderit in voluptate velit.
                </span>
              </li>
              <li>
                <i className="bi bi-check"></i>
                <span>Ullam est qui quos consequatur eos accusamus.</span>
              </li>
            </ul> */}
          </div>
        </div>

        {/* Feature 2 */}
        <div className="row gy-4 align-items-center features-item">
          <div className="col-md-7" data-aos="fade-up" data-aos-delay="200">
            <h3>Our Vision</h3>

            <p className="fst-italic">
              To become the leading provider of laundry solutions in the region,
              known for our commitment to excellence, innovation, and
              customer-centric approach. We aim to shape the future of laundry
              services, offering cutting-edge technology and world-class
              support, making every laundry operation smarter and more
              efficient.
            </p>
          </div>
          <div
            className="col-md-5 d-flex align-items-center"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <img src={image2} className="img-fluid" alt="Feature 2" />
          </div>
        </div>
      </div>
    </section>
  );
}
