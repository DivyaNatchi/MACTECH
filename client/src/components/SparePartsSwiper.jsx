import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
} from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

// Helper function to group spare parts into chunks of 12 (6 per row * 2 rows)
const groupSpareParts = (parts, groupSize) => {
  let groupedParts = [];
  for (let i = 0; i < parts.length; i += groupSize) {
    groupedParts.push(parts.slice(i, groupSize + i));
  }
  return groupedParts;
};

// Helper function to render spare parts
const renderSpareParts = (parts) => {
  return parts.map((part, index) => (
    <Col key={index} md="2" sm="4" xs="6" className="mb-3">
      <Card className="h-100 d-flex flex-column">
        <div className="img-container">
          <CardImg top src={part.img} alt="Spare part image" />
        </div>
        <hr />
        <CardBody className="d-flex justify-content-center">
          <CardTitle tag="h2" className="text-center">
            <p className="title mb-0">{part.title}</p>
          </CardTitle>
        </CardBody>
      </Card>
    </Col>
  ));
};

export default function SparePartsSwiper({ spareParts }) {
  const groupedSpareParts = groupSpareParts(spareParts, 12);

  return (
    <Container>
      {/* If no matching results, show a message */}
      {spareParts.length === 0 ? (
        <p>No matching results</p>
      ) : (
        <Swiper
          modules={[Navigation, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          scrollbar={{ draggable: true }}
        >
          {groupedSpareParts.map((group, groupIndex) => (
            <SwiperSlide key={groupIndex}>
              <Row className="justify-content-center">
                {renderSpareParts(group.slice(0, 6))}
              </Row>
              <Row className="justify-content-center">
                {renderSpareParts(group.slice(6, 12))}
              </Row>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Container>
  );
}
