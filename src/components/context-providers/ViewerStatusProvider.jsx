import React, { createContext, useState } from "react";

export const ViewerStatusContext = createContext();

const ViewerStatusProvider = props => {
    const [viewerIsOpen, setViewerIsopen] = useState(false);

    return (
        <ViewerStatusContext.Provider value={[viewerIsOpen, setViewerIsopen]}>
            {props.children}
        </ViewerStatusContext.Provider>
    );
};

export default ViewerStatusProvider;
