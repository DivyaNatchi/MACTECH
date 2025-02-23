import React, { useState, useEffect } from "react";
import { Row, Col, Card, CardImg, CardBody, CardTitle } from "reactstrap";

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
    <div>
      <h2>Washer Extractor</h2>
      <p>This is the content for Option 1 in Equipments.</p>

      <Row>
        {imageList.map((part, index) => (
          <Col
            lg="6"
            md="4"
            sm="6"
            xs="12"
            key={index}
            className="mb-4"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <Card className="service-item position-relative">
              <div className="img">
                <CardImg
                  top
                  width="100%"
                  src={part.img}
                  alt={`Image of ${part.title}`}
                />
              </div>
              <CardBody>
                <a href="service-details.html" className="stretched-link">
                  <CardTitle tag="h2">
                    <p className="title">{part.title}</p>
                  </CardTitle>
                </a>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
