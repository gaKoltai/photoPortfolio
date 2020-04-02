import React from "react";
import styled from "styled-components";

const StyledNavTitle = styled.h1`
    margin: 3rem 0 3rem 0;
    font-size: 2.3rem;
    color: white !important;
    letter-spacing: 0.1rem;
`;

interface Props {}

const NavTitle = (props: Props) => {
    return <StyledNavTitle>Van Coc</StyledNavTitle>;
};

export default NavTitle;
