import React from "react";
import {
  Modal,
  ModalBody,
  ModalHeader,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Button,
  ModalFooter,
} from "reactstrap";

export default function PopUpModal({
  isOpen,
  toggle,
  image,
  title,
  description,
}) {
  return (
    <Modal isOpen={isOpen} toggle={toggle} centered size="lg">
      {/* Close button in the top right */}
      <ModalHeader toggle={toggle} className="border-0"></ModalHeader>

      <ModalBody>
        <Card className="shadow-lg">
          {/* Display Image */}
          {image && (
            <CardImg top src={image} alt={title} className="img-fluid" />
          )}

          {/* Card content: Title and description */}
          <hr />
          <CardBody className="text-center">
            <CardTitle tag="h3">{title}</CardTitle>
            <CardText>{description}</CardText>
          </CardBody>
        </Card>
      </ModalBody>
      <ModalFooter>
        {/* Close button at the bottom */}
        <Button color="secondary" onClick={toggle} className="mt-3">
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
}
