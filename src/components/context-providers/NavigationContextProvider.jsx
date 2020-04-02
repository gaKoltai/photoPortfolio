import React, { createContext, useState } from "react";

export const NavigationContext = createContext();

const NavigationContextProvider = props => {
    const [link, setLink] = useState("home");

    return <NavigationContext.Provider value={[link, setLink]}>{props.children}</NavigationContext.Provider>;
};

export default NavigationContextProvider;
