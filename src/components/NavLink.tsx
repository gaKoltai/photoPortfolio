import React from "react";
import styled from "styled-components";
import CustomLink from "./CustomLink";

const StyledNavLink = styled.p`
    font-size: 1rem;
    margin: 1rem 0rem;
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
}

const NavLink = (props: Props) => {
    return (
        <CustomLink to={props.link}>
            <StyledNavLink>Very long link title</StyledNavLink>
        </CustomLink>
    );
};

export default NavLink;
