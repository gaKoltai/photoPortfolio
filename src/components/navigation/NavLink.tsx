import React, { MutableRefObject } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

export const StyledNavLink = styled.p`
    font-size: 1rem;
    letter-spacing: 0.1rem;
    font-weight: bold;
    margin: 2rem 0rem;
    border-style: none;
    border-radius: 10px;
    color: white !important;

    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;

const StyledScrollLink = styled(Link)`
    &.active {
        text-decoration: underline;
    }
`;

interface Props {
    children: string;
    link: string;
}

const NavLink = (props: Props) => {
    return (
        <StyledScrollLink activeClass="active" to={props.link} spy={true} smooth={true} offset={-140} duration={500}>
            <StyledNavLink>{props.children}</StyledNavLink>
        </StyledScrollLink>
    );
};

export default NavLink;
