import React from "react";
import LandingPage from "./components/main-site/LandingPage";
import NavBar from "./components/navigation/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProjectPage from "./components/portfolio/ProjectPage";
import SlideNumberContextProvider from "./components/context-providers/SlideNumberContextProvider";
import ViewerStatusProvider from "./components/context-providers/ViewerStatusProvider";
import imageLoader, { getDescription } from "./static/util/baltazarImgLoader";
import NavigationContextProvider from "./components/context-providers/NavigationContextProvider";

function App() {
    return (
        <Router>
            <NavigationContextProvider>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={LandingPage} />
                    <ViewerStatusProvider>
                        <SlideNumberContextProvider>
                            <Route
                                path="/portfolio/baltazár"
                                render={props => <ProjectPage images={imageLoader()} description={getDescription()} />}
                            />
                        </SlideNumberContextProvider>
                    </ViewerStatusProvider>
                </Switch>
            </NavigationContextProvider>
        </Router>
    );
}

export default App;
