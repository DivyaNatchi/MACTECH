import React from "react";
import { Row, Col } from "reactstrap";

const images = import.meta.glob(
  "../../assets/img/equipments/**/*.{jpg,png,jpeg}",
  { eager: true }
);

export default function Washer_Extractor() {
  const imageList = Object.keys(images).map((path) => {
    const imageName = path
      .split("/")
      .pop()
      .replace(/\.[^/.]+$/, ""); // Extract file name as title
    return { img: images[path].default, title: imageName };
  });

  return (
    <>
      <div className="mb-4">
        <h2>Washer Extractor</h2>
      </div>
      <div className="equipment-content-area">
        <Row className="g-3">
          {/* g-3 adds Bootstrap grid spacing */}
          {imageList.map((part, index) => (
            <Col lg="6" md="6" sm="12" key={index} className="equipment-col">
              <div className="washer-extractor-item position-relative">
                <div className="img">
                  <img
                    className="img-fluid"
                    src={part.img}
                    alt={`Image of ${part.title}`}
                  />
                </div>
                <div className="details">
                  <a href="#" className="stretched-link">
                    <h3>{part.title}</h3>
                  </a>
                  <p>
                    Ut autem aut autem non a. Sint sint sit facilis nam iusto
                  </p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}
