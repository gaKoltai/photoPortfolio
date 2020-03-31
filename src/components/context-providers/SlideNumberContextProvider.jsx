import React, { createContext, useState } from "react";

export const SlideNumberContext = createContext();

const SlideNumberContextProvider = props => {
    const [slide, setSlide] = useState();

    return <SlideNumberContext.Provider value={[slide, setSlide]}>{props.children}</SlideNumberContext.Provider>;
};

export default SlideNumberContextProvider;
