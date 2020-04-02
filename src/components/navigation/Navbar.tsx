import React from "react";
import styled from "styled-components";
import NavLink, { StyledNavLink } from "./NavLink";
import NavTitle from "./NavTitle";
import NavlinkWrapper from "./NavlinkWrapper";
import CustomLink from "./CustomLink";
import { useLocation, useHistory } from "react-router-dom";
import NavLinkWithScrollAndRedirect from "./NavLinkWithScrollAndRedirect";

const StyledNavBar = styled.nav`
    width: 15%;
    height: 100%;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 0 2vw;
    z-index: 1;
    color: white;
    background: #393a42;
    flex: 0 0 auto !important;
`;

interface Props {}

const NavBar = (props: Props) => {
    const location = useLocation();

    return (
        <StyledNavBar>
            <NavlinkWrapper>
                <NavTitle />
                <NavLinkWithScrollAndRedirect scroll={"home"} link={"/"}>
                    Home
                </NavLinkWithScrollAndRedirect>

                <NavLinkWithScrollAndRedirect scroll={"portfolio"} link={"/"}>
                    Portfolio
                </NavLinkWithScrollAndRedirect>
            </NavlinkWrapper>
        </StyledNavBar>
    );
};

export default NavBar;
