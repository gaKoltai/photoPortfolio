import React from "react";
import LandingPage from "./components/main-site/LandingPage";
import NavBar from "./components/navigation/Navbar";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProjectPage from "./components/portfolio/ProjectPage";
import SlideNumberContextProvider from "./components/context-providers/SlideNumberContextProvider";
import ViewerStatusProvider from "./components/context-providers/ViewerStatusProvider";

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <ViewerStatusProvider>
                    <SlideNumberContextProvider>
                        <Route path="/portfolio/baltazár" exact component={ProjectPage} />
                    </SlideNumberContextProvider>
                </ViewerStatusProvider>
            </Switch>
        </Router>
    );
}

export default App;
