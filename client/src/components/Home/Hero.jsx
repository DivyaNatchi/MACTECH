import { React } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/components/home/hero.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function Home() {
  // Define carousel items in an array
  const carouselItems = [
    {
      title: 'Welcome to MACTECH  "Your Partner in Laundry Excellence"',
      content:
        "At Mactech, we specialize in providing state-of-the-art laundry equipment, comprehensive setup solutions, and expert services tailored to your business. From new installations to ongoing maintenance, we ensure your laundry operations run smoothly and efficiently.",
      link: "#about",
      linkText: "Read More",
    },
    {
      title: "Top-Quality Laundry Equipment for Every Need",
      content:
        "Browse our wide selection of washers, dryers, and other laundry machines from leading brands. Whether you need industrial-grade machines or commercial solutions, we have the perfect fit for your business.",
      link: "/equipments/option1",
      linkText: "Read More",
    },
    {
      title: "Keep Your Laundry Running Without Downtime",
      content:
        "Our skilled technicians provide fast, reliable maintenance and repairs to keep your laundry machines running smoothly. Maximize uptime and avoid costly disruptions with Mactech's professional services.",
      link: "/services",
      linkText: "Read More",
    },
  ];

  return (
    <section id="hero" className="hero section dark-background">
      {/* Hero Carousel */}
      <div
        id="hero-carousel"
        className="carousel carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="5000"
      >
        <div className="container position-relative">
          {/* Render carousel items */}
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className="carousel-container">
                <h2>{item.title}</h2>
                <p>{item.content}</p>
                <Link to={item.link} className="btn-get-started">
                  {item.linkText}
                </Link>
              </div>
            </div>
          ))}

          {/* Carousel Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#hero-carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bi bi-chevron-left"
              aria-hidden="true"
            ></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#hero-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bi bi-chevron-right"
              aria-hidden="true"
            ></span>
          </button>

          {/* Carousel Indicators */}
          <ol className="carousel-indicators">
            {carouselItems.map((_, index) => (
              <li
                key={index}
                data-bs-target="#hero-carousel"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
              ></li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
