import React from "react";
import Img from "../assets/images/hero-img.png";
import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";

const Home = () => {
  const year = new Date().getFullYear();
  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">PuPuPu {year}</p>
                <button className="buy__btn">Купить</button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={Img} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
