import React from "react";

import { Container, Row, Col } from "reactstrap";
// import { motion } from "framer-motion";
import "./services.css";

const Services = () => {
  return (
    <section className="services">
      <Container>
        <Row>
          <Col lg="3" mg="4">
            <div className="service__item">
              <span>
                <i className="ri-truck-line"></i>
              </span>
              <div>
                <h3>Доставка</h3>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
