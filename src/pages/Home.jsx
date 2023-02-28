import React, { useState, useEffect } from "react";

import Img from "../assets/images/grocery-cart.png";
import Helmet from "../components/Helmet/Helmet";

import "../styles/home.css";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../services/Services";
import ProductList from "../components/UI/ProductList";
import products from "../assets/data/products";
import Clock from "../components/UI/Clock";

import counterImg from "../assets/images/Мандарины-скидка.png";

import { Container, Row, Col } from "reactstrap";

const Home = () => {
  const [Trend, setTrend] = useState([]);
  const [Best, setBest] = useState([]);
  const [NewArr, setNewArr] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filterTrendProducts = products.filter(
      (item) => item.category === "Хлеб"
    );
    setTrend(filterTrendProducts);
    const filterBestProducts = products.filter(
      (item) => item.category === "Фрукты"
    );
    setBest(filterBestProducts);
  }, []);

  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">PuPuPu {year}</p>
                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="/shop">Перейти в магазин</Link>
                </motion.button>
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

      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Трендовые продукты</h2>
            </Col>
            <ProductList data={Trend} />
          </Row>
        </Container>
      </section>

      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Лучшие продажи</h2>
            </Col>
            <ProductList data={Best} />
          </Row>
        </Container>
      </section>

      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="clock__top-content">
                <h4 className="text-white fs-6 mb-2">
                  Ограниченное предложение
                </h4>
                <h3 className="text-white fs-5 mb-3">Мандарины</h3>
              </div>
              <Clock />
              <motion.button
                whileTap={{ scale: 1.2 }}
                className="buy__btn store__btn"
              >
                <Link to="/shop">Перейти в магазин</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="6" className="text-end">
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Новые поступления</h2>
              <p className="section__subtitle">Нет поступлений</p>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />
    </Helmet>
  );
};

export default Home;
