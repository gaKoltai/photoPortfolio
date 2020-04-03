import React from "react";
import LandingPage from "./components/main-site/LandingPage";
import NavBar from "./components/navigation/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProjectPage from "./components/portfolio/ProjectPage";
import SlideNumberContextProvider from "./components/context-providers/SlideNumberContextProvider";
import ViewerStatusProvider from "./components/context-providers/ViewerStatusProvider";
import NavigationContextProvider from "./components/context-providers/NavigationContextProvider";
import Footer from "./components/footer/Footer";

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
                                render={props => <ProjectPage projectTitle={"baltazár"} />}
                            />
                            <Route path="/portfolio/entrée" render={props => <ProjectPage projectTitle={"entrée"} />} />
                        </SlideNumberContextProvider>
                    </ViewerStatusProvider>
                </Switch>
            </NavigationContextProvider>
            <Footer />
        </Router>
    );
}

export default App;
