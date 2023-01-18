import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";

import { Container, Row, Col } from "reactstrap";

import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import ReactPaginate from "react-paginate";

import "../styles/all-phones.css";
import "../styles/pagination.css";

const AllPhones = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const [pageNumber, setPageNumber] = useState(0);

    const searchedProduct = products.filter((item) => {
        if (searchTerm.value === "") {
            return item;
        }
        if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return item;
        } else {
            return console.log("not found");
        }
    });

    const productPerPage = 8;
    const visitedPage = pageNumber * productPerPage;
    const displayPage = searchedProduct.slice(
        visitedPage,
        visitedPage + productPerPage
    );

    const pageCount = Math.ceil(searchedProduct.length / productPerPage);

    const changepage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <Helmet title="All-Phones">
            <CommonSection title="All Phones" />

            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="6" xs="12">
                            <div className="search__widget d-flex align-items-center justify-content-between ">
                                <input
                                    type="text"
                                    placeholder="I'm...."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <span>
                                    <i class="ri-search-line"></i>
                                </span>
                            </div>
                        </Col>
                        <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
                            <div className="sorting__widget text-end">
                                <select className="w-50">
                                    <option>Default</option>
                                    <option value="ascending">A-Z</option>
                                    <option value="descending">Z-A</option>
                                    <option value="high-price">Hight Price</option>
                                    <option value="low-price">Low Price</option>
                                </select>
                            </div>
                        </Col>

                        {displayPage.map((item) => (
                            <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                                <ProductCard item={item} />
                            </Col>
                        ))}

                        <div>
                            <ReactPaginate
                                pageCount={pageCount}
                                onPageChange={changepage}
                                previousLabel={"Prev"}
                                nextLabel={"Next"}
                                containerClassName=" paginationBttns "
                            />
                        </div>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default AllPhones;
