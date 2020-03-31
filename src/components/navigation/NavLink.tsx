import React from "react";
import styled from "styled-components";
import CustomLink from "./CustomLink";

const StyledNavLink = styled.p`
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

interface Props {
    link: string;
    children: string;
}

const NavLink = (props: Props) => {
    return (
        <CustomLink to={props.link}>
            <StyledNavLink>{props.children}</StyledNavLink>
        </CustomLink>
    );
};

export default NavLink;
