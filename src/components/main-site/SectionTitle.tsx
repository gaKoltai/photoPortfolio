import React from "react";
import styled from "styled-components";

const StyledSectionTitle = styled.h3`
    margin: 3rem 0 3rem 0;
    font-size: 2.3rem;
    letter-spacing: 0.1rem;
    color: #393a42;
`;

interface Props {
    children: string;
}

const SectionTitle = (props: Props) => {
    return <StyledSectionTitle>{props.children}</StyledSectionTitle>;
};

export default SectionTitle;
