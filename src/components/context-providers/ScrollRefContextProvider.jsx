import React, { createContext, useRef } from "react";

export const ScrollRefContext = createContext();

const ScrollRefContextProvider = props => {
    const portfolioSection = useRef(null);

    return <ScrollRefContext.Provider value={[portfolioSection]}>{props.children}</ScrollRefContext.Provider>;
};

export default ScrollRefContextProvider;
