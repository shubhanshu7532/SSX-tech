import React from 'react';
import { Row, Col } from 'reactstrap';

const AboutUsPage = () => {
    return (
        <div className="about-us-page">
            <Row className="flex-row">
                <Col xs="12" className="mb-3 px-3 px-md-2">
                    <div className="about-us-container">
                        <h1 className="section-title">About Us</h1>
                        <p>
                            At SSX Store, we're on a mission to provide PC enthusiasts across India
                            with a seamless online shopping experience. Our commitment is to be the
                            premier destination for top-quality PC accessories, catering to the needs
                            of both casual users and hardcore gamers.
                        </p>

                        <h2 className="section-subtitle">Our Story</h2>
                        <p>
                            SSX Store began with a simple idea – to create a one-stop-shop where
                            individuals could find top-notch PC accessories without compromise.
                            Evolving over the years, we've stayed true to our commitment to
                            delivering excellence.
                        </p>

                        <h2 className="section-subtitle">What Sets Us Apart</h2>
                        <ul>
                            <li>
                                <strong>Curated Selection:</strong> Every product in our inventory is
                                handpicked to meet our stringent standards. We offer a curated selection
                                of the latest and most reliable PC accessories to ensure you find exactly
                                what you need.
                            </li>
                            <li>
                                <strong>Quality Assurance:</strong> We understand the importance of
                                reliable and durable accessories for your PC. That's why we work closely
                                with trusted brands and manufacturers to bring you products that stand
                                the test of time.
                            </li>
                            <li>
                                <strong>Competitive Prices:</strong> Premium quality doesn't have to
                                come with a hefty price tag. At SSX Store, our commitment to
                                affordability means you get the best value for your money.
                            </li>
                            <li>
                                <strong>Customer-Centric Approach:</strong> Your satisfaction is our
                                priority. Our dedicated customer support team is always ready to assist
                                you, whether you have questions about a product or need help with your
                                order.
                            </li>
                        </ul>

                        <h2 className="section-subtitle">Our Mission</h2>
                        <p>
                            At SSX Store, our mission is to empower every PC user with the tools they
                            need to enhance their computing experience. We aim to be more than just a
                            store – we want to be a trusted partner on your journey to building the
                            ultimate PC setup.
                        </p>

                        <h2 className="section-subtitle">Join Us on this Exciting Adventure</h2>
                        <p>
                            Explore our extensive collection of PC accessories and join us on this
                            exciting adventure. Whether you're a seasoned gamer, a professional content
                            creator, or someone looking to upgrade their home office, SSX Store has
                            something for everyone.
                        </p>

                        <p className="closing-message">
                            Thank you for choosing SSX Store – Where Quality Meets Innovation!
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default AboutUsPage;
