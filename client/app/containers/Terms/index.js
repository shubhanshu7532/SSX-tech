import React from "react";
import { Row, Col } from "reactstrap";

const TermsPage = () => {
  return (
    <div className="about-us-page">
      <Row className="flex-row">
        <Col xs="12" className="mb-3 px-3 px-md-2">
          <div className="about-us-container">
            <h1 className="section-title">Terms and Conditions of Use</h1>
            <p>
              Welcome to SSX Store! Before you dive into exploring our vast
              range of PC parts and accessories, please take a moment to
              familiarize yourself with our terms and conditions. By using our
              website, you agree to abide by the following terms:
            </p>

            <h2 className="section-subtitle">Product Information</h2>
            <ul className="d-flex flex-column mb-4 ml-4">
              <li>
                <strong>a.</strong> We strive to provide accurate and detailed
                information about our PC parts and accessories. However,
                specifications, prices, and availability may change without
                prior notice. We do our best to keep the information up-to-date.
              </li>

              <li>
                {" "}
                <strong>b.</strong> Images of products are for illustrative
                purposes only. Actual products may vary.
              </li>
            </ul>

            <h2 className="section-subtitle">Ordering and Payment</h2>
            <ul className="d-flex flex-column mb-4 ml-4">
              <li>
                <strong>a.</strong> By placing an order with us, you confirm
                that all information provided during the ordering process is
                accurate and complete.
              </li>
              <li>
                <strong>b.</strong> We reserve the right to refuse or cancel an
                order for any reason, including inaccuracies in product
                descriptions, pricing errors, or suspicion of fraudulent
                activity.
              </li>
              <li>
                c. Prices are subject to change, and all payments are securely
                processed. We do not store your payment information.
              </li>
            </ul>

            <h2 className="section-subtitle">Shipping and Delivery</h2>
            <ul className="d-flex flex-column mb-4 ml-4">
              <li>
                <strong>a.</strong> We aim to process and dispatch orders
                promptly. However, please note that delivery times may vary
                based on your location and other external factors.
              </li>
              <li>
                <strong>b.</strong> Shipping costs are calculated based on the
                delivery destination and the weight of the products. You will be
                informed of the shipping costs before finalizing your order.
              </li>
            </ul>

            <h2 className="section-subtitle">Compatibility</h2>
            <ul className="d-flex flex-column mb-4 ml-4">
              <li>
                <strong>a.</strong> It is the responsibility of the customer to
                ensure that purchased PC parts are compatible with their
                existing system. We provide information to assist with
                compatibility, but final verification rests with the customer.{" "}
              </li>
              <li>
                <strong>b.</strong> SSX Store is not responsible for any issues
                arising from incompatibility.
              </li>
            </ul>

            <h2 className="section-subtitle">Compatibility</h2>
            <ul className="d-flex flex-column mb-4 ml-4">
              <li>
                <strong>a.</strong> It is the responsibility of the customer to
                ensure that purchased PC parts are compatible with their
                existing system. We provide information to assist with
                compatibility, but final verification rests with the customer.{" "}
              </li>
              <li>
                <strong>b.</strong> SSX Store is not responsible for any issues
                arising from incompatibility.
              </li>
            </ul>

            <h2 className="section-subtitle">Warranty</h2>
            <ul className="d-flex flex-column mb-4 ml-4">
              <li>
                <strong>a.</strong> Products may be covered by manufacturer
                warranties. Please refer to the product documentation for
                warranty details.
              </li>
              <li>
                <strong>b.</strong> SSX Store is not responsible for any damages
                or losses resulting from the use of products purchased through
                our website.
              </li>
            </ul>

            <h2 className="section-subtitle">Intellectual Property</h2>
            <p className="ml-4">
              All content on our website, including text, graphics, logos, and
              images, is the property of SSX Store and is protected by
              intellectual property laws.
            </p>

            <h2 className="section-subtitle">Privacy Policy</h2>
            <p className="ml-4">
              Your privacy is important to us. Please review our Privacy Policy
              to understand how we collect, use, and protect your personal
              information.
            </p>

            <h2 className="section-subtitle">Limitation of Liability</h2>
            <p className="ml-4">
              SSX Store shall not be liable for any direct, indirect,
              incidental, special, or consequential damages arising out of or in
              connection with the use of our website or products.
            </p>

            <h2 className="section-subtitle">Governing Law</h2>
            <p className="ml-4">
              These terms and conditions are governed by the laws of Indi
              <strong>a.</strong> Any disputes shall be subject to the exclusive
              jurisdiction of the courts in Indi<strong>a.</strong>
            </p>

            <h2 className="section-subtitle">Changes to Terms</h2>
            <p className="ml-4">
              SSX Store reserves the right to update or modify these terms and
              conditions without prior notice. Please review them periodically.
            </p>

            <p className="closing-message d-flex flex-column">
              For any questions or concerns, contact us via email or phone.
              <span> Last Updated: [01/07/2023]</span>
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default TermsPage;
