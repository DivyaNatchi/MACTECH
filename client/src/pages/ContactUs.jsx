import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  FormGroup,
  Input,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/components/contactUs.css";
import { generateCaptcha } from "../utilities/captchaUtils";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [showStatus, setShowStatus] = useState(false);
  const [status, setStatus] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Generate a new CAPTCHA when the component mounts
    setCaptcha(generateCaptcha());
  }, []);

  const resetCaptcha = () => {
    setCaptcha(generateCaptcha()); // Regenerate a new captcha
    setCaptchaInput(""); // Reset the captcha input field
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update form data
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Field-level validation on input change
    const fieldError = validateField(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: fieldError || "", // Set field-specific error or clear error
    }));
  };

  const handleCaptchaChange = (e) => {
    setCaptchaInput(e.target.value);
  };

  // Centralized field validation logic
  const validateField = (name, value) => {
    let error = "";
    const nameAndSubjectRegex = /^[A-Za-z0-9\s]{1,252}$/;
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const messageRegex = /^[A-Za-z0-9\s.]{1,512}$/;

    switch (name) {
      case "name":
      case "subject":
        if (!value.trim()) {
          error = "This field is required.";
        } else if (value.length > 252) {
          error = "Must not exceed 252 characters.";
        } else if (!nameAndSubjectRegex.test(value)) {
          error = "Only alphabets, numbers and spaces are allowed.";
        }
        break;
      case "email":
        if (!value.trim()) {
          error = "Please enter your email address.";
        } else if (value.length > 50) {
          error = "Email must not exceed 50 characters.";
        } else if (!emailRegex.test(value)) {
          error = "Please enter a valid email address.";
        }
        break;
      case "message":
        if (!value.trim()) {
          error = "This field is required.";
        } else if (value.length > 512) {
          error = "Must not exceed 512 characters.";
        } else if (!messageRegex.test(value)) {
          error = "Only alphabets, numbers, spaces, and dots are allowed.";
        }
        break;
      default:
        break;
    }

    return error;
  };

  // Validate all fields before submission
  const validateFields = (data) => {
    const validationErrors = {};
    Object.keys(data).forEach((key) => {
      const error = validateField(key, data[key]);
      if (error) validationErrors[key] = error;
    });
    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation before submission
    const validationErrors = validateFields(formData);

    // Check if CAPTCHA is empty
    if (!captchaInput.trim()) {
      validationErrors.captcha = "Captcha is required.";
    }

    // Check if CAPTCHA matches
    if (captchaInput && captchaInput !== captcha) {
      validationErrors.captcha = "Captcha does not match. Please try again.";
      setCaptcha(generateCaptcha()); // Regenerate captcha
      setCaptchaInput("");
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      // Call the sendEmail function to send the form data to the server
      // const response = await sendEmail(formData);
      // setStatus("Message sent! Thank you!");
      setShowStatus(true);
      setStatus("success");

      // Reset form fields after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setCaptcha(generateCaptcha()); // Regenerate captcha after successful submission
      setCaptchaInput(""); // Reset captcha input
      setErrors({});
    } catch (error) {
      // setStatus("Failed to send message. Please try again.");
      setShowStatus(true);
      setStatus("failed");
    }

    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact US</h2>
      </div>
      <Container className="container" data-aos="fade-up" data-aos-delay="100">
        <Row className="row gy-4">
          {/* Contact Information */}
          <Col lg="6">
            <Row className="row gy-4">
              <Col lg="12">
                <div
                  className="info-item d-flex flex-column justify-content-center align-items-center"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <i className="bi bi-geo-alt"></i>
                  <h3>Address</h3>
                  <p>Al Nayef Souq, East Industrial Area Road, </p>
                  <p>Doha, Qatar</p>
                </div>
              </Col>

              <Col md="6">
                <div
                  className="info-item d-flex flex-column justify-content-center align-items-center"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <i className="bi bi-telephone"></i>
                  <h3>Call Us</h3>
                  <a href="tel:+97455838364">
                    <p>+974 5583 8364</p>
                  </a>
                </div>
              </Col>

              <Col md="6">
                <div
                  className="info-item d-flex flex-column justify-content-center align-items-center"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <i className="bi bi-envelope"></i>
                  <h3>Email Us</h3>
                  <a href="mailto:info@mactechqatar.com" target="_blank">
                    <p>info@mactechqatar.com</p>
                  </a>
                </div>
              </Col>
            </Row>
          </Col>

          {/* Contact Form */}
          <Col lg="6">
            <Form
              onSubmit={handleSubmit}
              noValidate
              className="email-form"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <Row className="row gy-4">
                <Col md="6">
                  <FormGroup>
                    <Input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    {errors.name && (
                      <div className="error-message">{errors.name}</div>
                    )}
                  </FormGroup>
                </Col>

                <Col md="6">
                  <FormGroup>
                    <Input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    {errors.email && (
                      <div className="error-message">{errors.email}</div>
                    )}
                  </FormGroup>
                </Col>

                <Col md="12">
                  <FormGroup>
                    <Input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                    {errors.subject && (
                      <div className="error-message">{errors.subject}</div>
                    )}
                  </FormGroup>
                </Col>

                <Col md="12">
                  <FormGroup>
                    <Input
                      className="form-control"
                      type="textarea"
                      name="message"
                      rows="4"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />

                    {errors.message && (
                      <div className="error-message">{errors.message}</div>
                    )}
                  </FormGroup>
                </Col>
                {/* CAPTCHA Section */}

                <Col>
                  <div class="input_field captch_box">
                    <input type="text" value={captcha} disabled />
                    <i
                      className="bi bi-arrow-clockwise refresh_button"
                      onClick={resetCaptcha}
                      role="button"
                      aria-label="Refresh CAPTCHA"
                    ></i>
                  </div>
                </Col>
                <Col md="6">
                  <Input
                    type="text"
                    name="captcha"
                    value={captchaInput}
                    onChange={handleCaptchaChange}
                    placeholder="Enter captcha"
                    style={{ background: "#ffffff" }}
                    required
                  />

                  {errors.captcha && (
                    <div className="error-message">{errors.captcha}</div>
                  )}
                </Col>

                <Col md="12" className="text-center">
                  {showStatus && (
                    <div>
                      {status === "success" && (
                        <p className="success mb-3">
                          We have successfully received your message. Our team
                          will review your inquiry and get back to you shortly.
                          We appreciate your interest and look forward to
                          assisting you!
                        </p>
                      )}
                      {status === "failed" && (
                        <p className="failed mb-3">
                          Failed to send message. Please try again.
                        </p>
                      )}
                    </div>
                  )}
                  <Button type="submit" className="mb-3">
                    Send Message
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>

      {/* Google Map */}
      <Container className="mt-5" data-aos="fade-up" data-aos-delay="200">
        <iframe
          style={{ border: 0, width: "100%", height: "370px" }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.461894063961!2d51.43433331032373!3d25.22136323062958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45d13ce536723b%3A0x4af3990671c30398!2sMactech%20Qatar!5e0!3m2!1sen!2sqa!4v1739803387847!5m2!1sen!2sqa"
          frameBorder="0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </Container>
    </section>
  );
}
