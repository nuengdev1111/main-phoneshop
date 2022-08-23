import React from "react";
import { Container } from "reactstrap";
import "../../../styles/common-section.css";

const CommonSection = (props) => {
    return (
        <section className="common__section">
            <Container>
                <h2 className="text-white">All Phones</h2>
            </Container>
        </section>
    );
};

export default CommonSection;
