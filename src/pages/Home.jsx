import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import heroImg from "../assets/images/hero.png";
import "../styles/hero-section.css";

import { Link  } from "react-router-dom";

import Category from "../components/UI/category/Category.jsx";

import "../styles/home.css";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import products from "../assets/fake-data/products.js";

import phoneCategoryImg01 from "../assets/images/phone1.png";
import phoneCategoryImg02 from "../assets/images/phone2.png";
import phoneCategoryImg03 from "../assets/images/phone3.png";

import ProductCard from "../components/UI/product-card/ProductCard.jsx";

import whyImg from "../assets/images/location.png";

import networkImg from "../assets/images/network.png";

import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";

const featureData = [
    {
        title: "Free Delivery",
        imgUrl: featureImg01,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
    },

    {
        title: "24 Hours",
        imgUrl: featureImg02,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
    },
    {
        title: "Easy Pick",
        imgUrl: featureImg03,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
    },
];

const Home = () => {
    const [category, setCategory] = useState("ALL");
    const [allProducts, setAllProducts] = useState(products);

    const [hotSamsung, setHotSamsung] = useState([]);

    useEffect(() => {
        const filteredSamsung = products.filter((item) => item.category === "Samsung");
        const sliceSamsung = filteredSamsung.slice(0, 4);
        setHotSamsung(sliceSamsung);
    }, []);

    useEffect(() => {
        if (category === "ALL") {
            setAllProducts(products);
        }

        if (category === "IPHONE") {
            const filteredProducts = products.filter(
                (item) => item.category === "Iphone"
            );

            setAllProducts(filteredProducts);
        }

        if (category === "SAMSUNG") {
            const filteredProducts = products.filter(
                (item) => item.category === "Samsung"
            );

            setAllProducts(filteredProducts);
        }

        if (category === "HUAWEI") {
            const filteredProducts = products.filter(
                (item) => item.category === "Huawei"
            );

            setAllProducts(filteredProducts);
        }
    }, [category]);

    return (
        <Helmet title="Home">
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6">
                            <div className="hero__content  ">
                                <h1 className="mb-4 hero__title">
                                    <span>introducing our next level of power</span>
                                </h1>

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                                    magni delectus tenetur autem, sint veritatis!
                                </p>

                                <div className="hero__btns d-grid justify-content-left align-items-center gap-5 mt-4">
                                    <button className="order__btn d-flex align-items-center justify-content-left justify-content-between">
                                        Order <i className="ri-send-plane-2-line"></i>
                                    </button>

                                    <button className="all__phones-btn">
                                        <Link to="/phones">See All Phone</Link>
                                    </button>
                                </div>

                                
                            </div>
                        </Col>

                        <Col lg="6" md="6">
                            <div className="hero__img">
                                <img src={heroImg} alt="hero-img" className="w-100" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="pt-0">
                <Category />
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg="12" className="text-center">
                            <h5 className="feature__subtitle mb-4">We live</h5>
                            <h2 className="feature__title">
                                to save <span>time</span>
                            </h2>
                            <p className="mb-1 mt-4 feature__text">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, officiis?
                                officii
                            </p>
                            <p className="feature__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eius.{"  "}
                            </p>
                        </Col>

                        {featureData.map((item, index) => (
                            <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                                <div className="feature_item text-center px-5 py-3">
                                    <img
                                        src={item.imgUrl}
                                        alt="feature-img"
                                        className="w-25 mb-3"
                                    />
                                    <h5 className=" fw-bold mb-3">{item.title}</h5>
                                    <p>{item.desc}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg="12" className="text-center">
                            <h2>Popular Phone</h2>
                        </Col>

                        <Col lg="12">
                            <div className="phone__category d-flex align-items-center justify-content-center gap-4">
                                <button
                                    className={`all__btn  ${
                                        category === "ALL" ? "phoneBtnActive" : ""
                                    } `}
                                    onClick={() => setCategory("ALL")}
                                >
                                    All
                                </button>
                                <button
                                    className={`d-flex align-items-center gap-2 ${
                                        category === "IPHONE" ? "phoneBtnActive" : ""
                                    } `}
                                    onClick={() => setCategory("IPHONE")}
                                >
                                    <img src={phoneCategoryImg01} alt="" />
                                    Iphone
                                </button>

                                <button
                                    className={`d-flex align-items-center gap-2 ${
                                        category === "SAMSUNG" ? "phoneBtnActive" : ""
                                    } `}
                                    onClick={() => setCategory("SAMSUNG")}
                                >
                                    <img src={phoneCategoryImg02} alt="" />
                                    Samsung
                                </button>

                                <button
                                    className={`d-flex align-items-center gap-2 ${
                                        category === "HUAWEI" ? "phoneBtnActive" : ""
                                    } `}
                                    onClick={() => setCategory("HUAWEI")}
                                >
                                    <img src={phoneCategoryImg03} alt="" />
                                    Huawei
                                </button>
                            </div>
                        </Col>

                        {allProducts.map((item) => (
                            <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                                <ProductCard item={item} />
                            </Col>
                        ))}
                    </Row>
                </Container>     
            </section>

            <section className="why__choose-us">
                <Container>
                    <Row>
                        <Col lg="6" md="6">
                            <img src={whyImg} alt="why-tasty-treat" className="w-100" />
                        </Col>

                        <Col lg="6" md="6">
                            <div className="why__tasty-treat">
                                <h2 className="tasty__treat-title mb-4">
                                    How <span>can we help you today?</span>
                                </h2>
                                <p className="tasty__treat-desc">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, minus. Tempora
                                    reprehenderit a corporis velit, laboriosam vitae ullam, repellat illo sequi odio esse iste
                                    fugiat dolor, optio incidunt eligendi deleniti!
                                </p>

                                <ListGroup className="mt-4">
                                    <ListGroupItem className="border-0 ps-5">
                                        <p className=" choose__us-title d-flex align-items-center gap-2 ">
                                            <i class="ri-smartphone-line"></i> Bring your
                                                own device
                                        </p>
                                        <p className="choose__us-desc">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, voluptatibus.
                                        </p>
                                    </ListGroupItem>

                                    <ListGroupItem className="border-0 ps-5">
                                        <p className=" choose__us-title d-flex align-items-center gap-2 ">
                                            <i class="ri-customer-service-2-fill"></i> Get help online
                                        </p>
                                        <p className="choose__us-desc">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, earum.
                                        </p>
                                    </ListGroupItem>

                                    <ListGroupItem className="border-0 ps-5">
                                        <p className=" choose__us-title d-flex align-items-center gap-2 ">
                                            <i class="ri-map-pin-line"></i> Visit a store{" "}
                                        </p>
                                        <p className="choose__us-desc">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, earum.
                                        </p>
                                    </ListGroupItem>
                                </ListGroup>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="pt-0">
                <Container>
                    <Row>
                        <Col lg="12" className="text-center mb-4 ">
                            <h2>Hott</h2>
                        </Col>

                        {hotSamsung.map((item) => (
                            <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
                                <ProductCard item={item} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6">
                            <div className="testimonial ">
                                <h5 className="testimonial__subtitle mb-10"></h5>
                                <h2 className="testimonial__title mb-8">
                                    What our <span>customers</span> are saying
                                </h2>
                                <p className="testimonial__desc mb-7">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio quasi qui minus quos
                                    sit perspiciatis inventore quis provident placeat fugiat!
                                </p>

                                <TestimonialSlider />
                            </div>
                        </Col>

                        <Col lg="6" md="6">
                            <img src={networkImg} alt="testimonial-img" className="w-100 mb-5" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Home;
