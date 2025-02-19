import React from "react";
import { Container, Row, Col } from "reactstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../assets/styles/components/services.css";

export default function Services() {
  return (
    <section id="featured-services" className="featured-services section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Services</h2>
      </div>
      <Container>
        <Row className="gy-4">
          <Col md="6" data-aos="fade-up" data-aos-delay="100">
            <div className="service-item item-cyan position-relative">
              <div className="icon">
                <i className="bi bi-gear"></i>
              </div>
              <h3>Precision Laundry Equipment Services</h3>
              <p>
                We specialize in providing top-quality laundry equipment
                solutions, including the installation, maintenance, and repair
                of commercial washers, dryers, etc. Our expert technicians
                ensure that your laundry machines operate efficiently,
                minimizing downtime and maximizing productivity.
              </p>
            </div>
          </Col>

          <Col md="6" data-aos="fade-up" data-aos-delay="200">
            <div className="service-item item-orange position-relative">
              <div className="icon">
                <i className="bi bi-clipboard-check"></i>
              </div>
              <h3>Year-Round Laundry Machine Protection (AMC)</h3>
              <p>
                Our Annual Maintenance Contracts offer you peace of mind by
                ensuring that your laundry equipment is serviced regularly. With
                scheduled inspections and preventive maintenance, we help extend
                the life of your machines, reduce repair costs, and keep your
                operations running smoothly throughout the year.
              </p>
            </div>
          </Col>

          <Col md="6" data-aos="fade-up" data-aos-delay="300">
            <div className="service-item item-teal position-relative">
              <div className="icon">
                <i className="bi bi-life-preserver"></i>
              </div>
              <h3>Your Partner in Post-Sales Laundry Care</h3>
              <p>
                We provide exceptional after-sales service to ensure your
                laundry equipment performs optimally. From routine maintenance
                to troubleshooting and repairs, our dedicated service team is
                here to assist you with any issues, ensuring long-term
                satisfaction with your purchase.
              </p>
            </div>
          </Col>

          <Col md="6" data-aos="fade-up" data-aos-delay="400">
            <div className="service-item item-red position-relative">
              <div className="icon">
                <i className="bi bi-telephone"></i>
              </div>
              <h3>On-Demand Laundry Repair Services</h3>
              <p>
                Need urgent assistance? Our on-call maintenance services are
                available to handle any emergency repairs or breakdowns. Our
                skilled team respond quickly to your needs, ensuring your
                laundry operations are back up and running with minimal
                disruption.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
