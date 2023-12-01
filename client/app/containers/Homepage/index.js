/**
 *
 * Homepage
 *
 */

import React from "react";

import { connect } from "react-redux";
import { Row, Col } from "reactstrap";

import actions from "../../actions";
import banners from "./banners.json";
import CarouselSlider from "../../components/Common/CarouselSlider";
import { responsiveOneItemCarousel } from "../../components/Common/CarouselSlider/utils";
import "./homePage.css";
import { Link } from "react-router-dom";

class Homepage extends React.PureComponent {
  render() {
    return (
      <div className="homepage">
        <div className="hero_header">
          <p className="main_header">
            SSX Store Unleash Innovation,Connect with Cutting-Edge Electronics.
          </p>

          <p className="header_description">
            Explore a World of Digital Brilliance with Our Top-Notch Tech
            Products.
          </p>

          <div className="shop_button">
            <Link to="/shop">
              <span>Shop</span>
            </Link>
          </div>
        </div>
        {/* <Row className="flex-row">
          <Col xs="12" lg="6" className="order-lg-2 mb-3 px-3 px-md-2">
            <div className="home-carousel">
              <CarouselSlider
                swipeable={true}
                // showDots={true}
                infinite={true}
                autoPlay={true}
                slides={banners}
                responsive={responsiveOneItemCarousel}

              >
                {banners.map((item, index) => (
                  <img key={index} src={item.imageUrl} className="carousal_image" />
                ))}
              </CarouselSlider>
            </div>
          </Col>
          <Col xs="12" lg="3" className="order-lg-1 mb-3 px-3 px-md-2">
            <div className="d-flex flex-column h-100 justify-content-between">
              <img
                src="https://www.thedigitalbridges.com/wp-content/uploads/2016/08/best-gaming-laptop-how-to-buy.jpg"
                className="mb-3"
              />
              <img src="https://www.thedigitalbridges.com/wp-content/uploads/2016/08/best-gaming-laptop-how-to-buy.jpg" />
            </div>
          </Col>
          <Col xs="12" lg="3" className="order-lg-3 mb-3 px-3 px-md-2">
            <div className="d-flex flex-column h-100 justify-content-between">
              <img
                src="https://www.thedigitalbridges.com/wp-content/uploads/2016/08/best-gaming-laptop-how-to-buy.jpg"
                className="mb-3"
              />
              <img src="https://www.thedigitalbridges.com/wp-content/uploads/2016/08/best-gaming-laptop-how-to-buy.jpg" />
            </div>
          </Col>
        </Row> */}

        <div className="hero_carousal_container">
          <div className="carousal_track">
            <div className="carousal_container">
              {banners.map((item, index) => (
                <img
                  key={index}
                  src={item.imageUrl}
                  className="product_image"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, actions)(Homepage);
