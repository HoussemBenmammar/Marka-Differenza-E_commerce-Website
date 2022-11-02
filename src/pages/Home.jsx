import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import heroImg from '../assets/images/hero-img.png'
import '../styles.css/home.css'


function Home() {
  return (
    <Helmet title="home">
     <section className="hero__section">
            <Container>
                <Row>
                    <Col sm="12" lg="6" md="6" >
                        <div className="hero__content">
                            <p>Trending production in 2022</p>
                            <h2>Make Your Interior More Minimalistic & Modern</h2>
                            <p>Lorem Ipsum has been dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
                                to make a type specimen book. </p>
                            <motion.button whileTap={{ scale: 1.2 }}
                                className="buy_btn"><Link to='shop'>SHOP NOW</Link></motion.button>
                        </div>
                    </Col>
                    <Col sm="12" lg="6" md="6">
                        <img src={heroImg} alt="hero image" />
                    </Col>
                </Row>
            </Container >
        </section >
    </Helmet>
  )
}

export default Home