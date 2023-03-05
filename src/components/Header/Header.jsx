import React, { useRef, useEffect } from "react";
import "./header.css";
import { NavLink, useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import logo from "../../assets/images/eco-logo.png";
import user_icon from "../../assets/images/user-icon.png";

import { Container, Row } from "reactstrap";
import { useSelector } from "react-redux";
import useAuth from "../../custom-hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";

import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const nav__link = [
  {
    path: "home",
    display: "Главная",
  },
  {
    path: "shop",
    display: "Магазин",
  },
  {
    path: "cart",
    display: "Корзина",
  },
];

const Header = () => {
  const navigate = useNavigate();

  const navigateToCart = () => {
    navigate("/cart");
  };

  const navigateToLogin = () => {
    navigate("/login");
  };

  const { currentUser } = useAuth();
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("stycky__header");
      } else {
        headerRef.current.classList.remove("stycky__header");
      }
    });
  };

  const profileActionRef = useRef(null);
  
  const toggleProfileActions = () =>
    profileActionRef.current.classList.toggle("show__profileActions");

  const menuRef = useRef(null);

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Вы вышли из аккаунта");
        navigate("/home");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>Семейный</h1>
              </div>
            </div>
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {nav__link.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav__active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__icons">
              {/* <span className="fav__icon">
                <i className="ri-heart-line"></i>
                <span className="badge">1</span>
              </span> */}
              <span className="cart__icon" onClick={navigateToCart}>
                <i className="ri-shopping-bag-line"></i>
                <span className="badge">{totalQuantity}</span>
              </span>
              <div className="profile">
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={currentUser ? currentUser.photoURL : user_icon}
                  alt=""
                  onClick={navigateToLogin}
                />
                <div
                  className="profile__actions"
                  ref={profileActionRef}
                  onClick={toggleProfileActions}
                >
                  {currentUser ? (
                    <span onClick={logout}>Logout</span>
                  ) : (
                    <div className="d-flex align-items-center justify-content-center flex-column">
                      <Link to="/signup">Signup</Link>
                      <Link to="/login">Login</Link>
                    </div>
                  )}
                </div>
              </div>
              <div className="mobile__menu">
                <span onClick={menuToggle}>
                  <i className="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
