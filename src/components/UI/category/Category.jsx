import React from "react";

import { Container, Row, Col } from "reactstrap";

import categoryImg01 from "../../../assets/images/category-01.png";
import categoryImg02 from "../../../assets/images/category-02.png";
import categoryImg03 from "../../../assets/images/category-03.png";
import categoryImg04 from "../../../assets/images/category-04.png";

import "../../../styles/category.css";

const categoryData = [
    {
        display: "5th generation mobile network",
        imgUrl: categoryImg01,
    },
    {
        display: "Face ID helps protect your information on your Phone",
        imgUrl: categoryImg02,
    },

    {
        display: "The best camera phones take photos and video",
        imgUrl: categoryImg03,
    },

    {
        display: "All mobile phone brands",
        imgUrl: categoryImg04,
    },
];

const category = () => {
    return (
        <Container>
            <Row>
                {categoryData.map((item, index) => (
                    <Col lg="6" md="4" sm="6" xs="6" className="mb-4" key={index}>
                        <div className="category__item d-flex align-items-center gap-3">
                            <div className="category__img">
                                <img src={item.imgUrl} alt="category__item" />
                            </div>
                            <h6>{item.display}</h6>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default category;
