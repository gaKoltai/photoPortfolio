import React from "react";
import styled from "styled-components";
import NavLink from "./NavLink";
import NavTitle from "./NavTitle";

const StyledNavBar = styled.div`
    width: 15vw;
    height: 100vh;
    display: flex;
    /*position: fixed;*/
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding: 0 2vw;
    z-index: 1;
    color: white;
    background-color: black;

    h1 {
        font-size: 2rem;
        letter-spacing: 0.2rem;
    }
`;

interface Props {}

const NavBar = (props: Props) => {
    return (
        <StyledNavBar>
            <NavTitle />
            <NavLink />
            <NavLink />
            <NavLink />
            <NavLink />
        </StyledNavBar>
    );
};

export default NavBar;
