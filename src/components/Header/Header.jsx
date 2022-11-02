import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import {Container , Row} from "reactstrap"
import logo from '../../assets/images/eco-logo.png'
import userIcon from '../../assets/images/user-icon.png'
import {motion} from 'framer-motion'

function Header() {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="" />
              <div>
                <h2>Multimart</h2>
              </div>
            </div>

            <div className="navigation">
              <ul className="menu">
                <li className="nav__item">
                  <NavLink activeClassName="active" to="home">Home</NavLink>
                </li>
                <li className="nav__item">
                  <NavLink  activeClassName="active" to="shop" >Shop</NavLink>
                </li>
                <li className="nav__item" >
                  <NavLink  activeClassName="active" to="cart">Cart</NavLink>
                </li>
              </ul>
            </div>

            <div className="nav__icons">
              <span className="cart__item"><i class="ri-shopping-bag-line"></i>
              <span className="badge">1</span></span>
              <span className="fav__item"><i class="ri-heart-line"></i>
              <span className="badge">1</span>
              </span>
              <span><motion.img whileTap={{scale:1.2}} src={userIcon} alt="user image" /></span>
            </div>

            <div className="mobile__menu">
              <span><i class="ri-menu-line"></i></span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header