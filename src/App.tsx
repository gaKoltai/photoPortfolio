import React from "react";
import LandingPage from "./components/main-site/LandingPage";
import NavBar from "./components/navigation/Navbar";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProjectPage from "./components/portfolio/ProjectPage";
import SlideNumberContextProvider from "./components/context-providers/SlideNumberContextProvider";
import ViewerStatusProvider from "./components/context-providers/ViewerStatusProvider";

const StyledContentDivider = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
`;

function App() {
    return (
        <Router>
            <StyledContentDivider>
                <NavBar />

                <Switch>
                    <Route path="/" exact component={LandingPage} />
                    <ViewerStatusProvider>
                        <SlideNumberContextProvider>
                            <Route path="/projects/project1" exact component={ProjectPage} />
                        </SlideNumberContextProvider>
                    </ViewerStatusProvider>
                </Switch>
            </StyledContentDivider>
        </Router>
    );
}

export default App;
