import React from "react";
import styled from "styled-components";
import CustomLink from "./CustomLink";

const StyledNavTitle = styled.h1`
    margin: 3rem 0 3rem 0;
    font-size: 2.3rem;
    color: white !important;
    letter-spacing: 0.1rem;

    &:hover {
        cursor: pointer;
    }
`;

interface Props {}

const NavTitle = (props: Props) => {
    return (
        <CustomLink to="/">
            <StyledNavTitle>Van Coc</StyledNavTitle>
        </CustomLink>
    );
};

export default NavTitle;
