import React from "react";
import styled from "styled-components";
import NavLink from "./NavLink";
import NavTitle from "./NavTitle";

const StyledNavBar = styled.div`
    width: 15vw;
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding: 0 2vw;
    z-index: 1;
    color: white;
    background: #d0d5d6;
`;

interface Props {}

const NavBar = (props: Props) => {
    return (
        <StyledNavBar>
            <NavTitle />
            <NavLink link={"/projects/project1"} />
        </StyledNavBar>
    );
};

export default NavBar;
