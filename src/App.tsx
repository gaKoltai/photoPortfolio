import React, { Fragment } from "react";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/Navbar";
import styled from "styled-components";

const StyledContentDivider = styled.div`
    display: flex;
`;

function App() {
    return (
        <StyledContentDivider>
            <NavBar />
            <LandingPage />
        </StyledContentDivider>
    );
}

export default App;
