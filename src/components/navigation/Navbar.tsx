import React from "react";
import styled from "styled-components";
import NavLink from "./NavLink";
import NavTitle from "./NavTitle";
import NavlinkWrapper from "./NavlinkWrapper";

const StyledNavBar = styled.nav`
    width: 20vw;
    height: 100vh;
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
                <NavLink link={"/"}>Home</NavLink>
                <NavLink link={"/projects/project1"}>Portfolio</NavLink>
                <NavLink link={"/projects/project1"}>About Me</NavLink>
            </NavlinkWrapper>
        </StyledNavBar>
    );
};

export default NavBar;
