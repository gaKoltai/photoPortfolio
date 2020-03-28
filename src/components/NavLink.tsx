import React from "react";
import styled from "styled-components";

const StyledNavLink = styled.a`
    padding: 1.5rem 3rem;
    font-size: 1.2rem;
    margin: 1.5rem 0;
    border-style: none;
    border-radius: 10px;

    &:hover {
        background-color: gray;
        cursor: pointer;
    }
`;

interface Props {}

const NavLink = (props: Props) => {
    return <StyledNavLink>Link</StyledNavLink>;
};

export default NavLink;
