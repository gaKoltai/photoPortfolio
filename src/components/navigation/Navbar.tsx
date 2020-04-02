import React from "react";
import styled from "styled-components";
import NavLink, { StyledNavLink } from "./NavLink";
import NavTitle from "./NavTitle";
import NavlinkWrapper from "./NavlinkWrapper";
import CustomLink from "./CustomLink";

const StyledNavBar = styled.nav`
    width: 20%;
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
    return (
        <StyledNavBar>
            <NavlinkWrapper>
                <NavTitle />
                {window.location.pathname === "/" ? (
                    <NavLink link="home">Home</NavLink>
                ) : (
                    <CustomLink to={"/"}>
                        <StyledNavLink>Home</StyledNavLink>
                    </CustomLink>
                )}

                <NavLink link="portfolio">Portfolio</NavLink>
            </NavlinkWrapper>
        </StyledNavBar>
    );
};

export default NavBar;
