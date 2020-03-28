import React from "react";
import styled from "styled-components";

const StyledNavTitle = styled.h1`
    margin: 3rem 0;
    font-family: "Pacifico", cursive;
`;

interface Props {}

const NavTitle = (props: Props) => {
    return <StyledNavTitle>Van Coc</StyledNavTitle>;
};

export default NavTitle;
