import React, { useContext } from "react";
import NavLink from "./NavLink";
import CustomLink from "./CustomLink";
import { StyledNavLink } from "./NavLink";
import { useLocation } from "react-router-dom";
import { NavigationContext } from "../context-providers/NavigationContextProvider";

interface Props {
    children: string;
    scroll: string;
    link: string;
}

const NavLinkWithScrollAndRedirect = (props: Props) => {
    const location = useLocation();

    const [link, setLink] = useContext(NavigationContext);

    return location.pathname === "/" ? (
        <NavLink link={props.scroll}>{props.children}</NavLink>
    ) : (
        <CustomLink to={props.link}>
            <StyledNavLink onClick={() => setLink(props.scroll)}>{props.children}</StyledNavLink>
        </CustomLink>
    );
};

export default NavLinkWithScrollAndRedirect;
