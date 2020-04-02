import React from "react";
import NavLink from "./NavLink";
import CustomLink from "./CustomLink";
import { StyledNavLink } from "./NavLink";
import { useLocation } from "react-router-dom";

interface Props {
    children: string;
    scroll: string;
    link: string;
}

const NavLinkWithScrollAndRedirect = (props: Props) => {
    const location = useLocation();

    return location.pathname === "/" ? (
        <NavLink link={props.scroll}>{props.children}</NavLink>
    ) : (
        <CustomLink to={props.link}>
            <StyledNavLink>{props.children}</StyledNavLink>
        </CustomLink>
    );
};

export default NavLinkWithScrollAndRedirect;
