import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import { useSearchParams } from "react-router-dom";
import { getWasherExtractorByBrand } from "../../data/washer_extrator_data"; // Import the function
import PopUpModal from "../PopUpModal";

export default function Washer_Extractor() {
  const [searchParams] = useSearchParams(); // Using useSearchParams to get query param
  const brand = searchParams.get("brand"); // Get 'brand' from search params

  // Get filtered images using the function from imageData.js
  const washerExtractorList = getWasherExtractorByBrand(brand);

  // State for managing modal visibility and content
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedDescription, setSelectedDescription] = useState("");

  // Function to open the modal with specific image and content
  const openModal = (img, title, description) => {
    setSelectedImage(img);
    setSelectedTitle(title);
    setSelectedDescription(description);
    setModalOpen(true);
  };

  // Function to close the modal
  const toggleModal = () => setModalOpen(!modalOpen);

  return (
    <>
      <div className="mb-4">
        <h2>Washer Extractor</h2>
      </div>
      <div className="equipment-content-area">
        <Row className="g-3">
          {/* g-3 adds Bootstrap grid spacing */}
          {washerExtractorList.map((part, index) => (
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
                  <a
                    href="#"
                    className="stretched-link"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      openModal(part.img, part.title, part.description);
                    }}
                  >
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

      {/* Render the ImageModal */}
      <PopUpModal
        isOpen={modalOpen}
        toggle={toggleModal}
        image={selectedImage}
        title={selectedTitle}
        description={selectedDescription}
      />
    </>
  );
}
