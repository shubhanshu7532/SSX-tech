import React from 'react';
import { Row, Col } from 'reactstrap';

const RefundPolicyPage = () => {
    return (
        <div className="refund-policy-page">
            <Row className="flex-row">
                <Col xs="12" className="mb-3 px-3 px-md-2">
                    <div className="refund-policy-container">
                        <h1 className="section-title">SSX Store Refund Policy</h1>
                        <p>
                            <strong>Last Updated:</strong> 01 July 2023
                        </p>

                        <h2 className="section-subtitle">1. Returns</h2>
                        <p>
                            We at SSX Store are committed to ensuring your satisfaction with our
                            products. If you are not entirely satisfied with your purchase, we're here
                            to help.
                        </p>

                        <h2 className="section-subtitle">2. Eligibility for Returns</h2>
                        <p>
                            To be eligible for a return, your item must be unused, in the same condition
                            that you received it, and in its original packaging. You must initiate the
                            return process within 14 days from the date of purchase.
                        </p>

                        <h2 className="section-subtitle">3. Refund Process</h2>
                        <p>
                            Upon receiving your return, we will inspect the item and notify you of the
                            status of your refund. If your return is approved, we will initiate a refund
                            to your original method of payment.
                        </p>

                        <h2 className="section-subtitle">4. Refund Timeframe</h2>
                        <p>
                            Refunds may take 7 days to process, depending on your payment method and
                            banking institution. Please note that some financial institutions may take
                            longer to process the refund.
                        </p>

                        <h2 className="section-subtitle">5. Non-Returnable Items</h2>
                        <p>
                            Certain items are non-returnable, including but not limited to:
                            <ul>
                                <li>Gift cards</li>
                                <li>Downloadable software products</li>
                                <li>Personalized or customized items</li>
                            </ul>
                        </p>

                        <h2 className="section-subtitle">6. Shipping Costs</h2>
                        <p>
                            Shipping costs are non-refundable. If you receive a refund, the cost of return
                            shipping will be deducted from your refund.
                        </p>

                        <h2 className="section-subtitle">7. Damaged or Defective Items</h2>
                        <p>
                            If you receive a damaged or defective item, please contact us immediately via
                            email or telephone, and we will work with you to resolve the issue promptly.
                        </p>

                        <h2 className="section-subtitle">8. Exchanges</h2>
                        <p>
                            We do not offer direct exchanges. If you need a different item, simply return
                            the original item for a refund and place a new order.
                        </p>

                        <h2 className="section-subtitle">9. How to Initiate a Return</h2>
                        <p>
                            To initiate a return, please contact us for a refund number and refund form.
                            Include your order number and details about the item you wish to return.
                        </p>

                        <h2 className="section-subtitle">10. Contact Us</h2>
                        <p>
                            If you have any questions about our refund policy, please contact us via email
                            or phone.
                        </p>

                        <p className="closing-message">
                            Thank you for shopping at SSX Store!
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default RefundPolicyPage;
