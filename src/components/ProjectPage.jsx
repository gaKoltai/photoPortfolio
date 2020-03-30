import React, { useContext } from "react";
import styled from "styled-components";
import DoubleImageWrapper from "./DoubleImageWrapper";
import { images } from "../util/photo";
import ProjectDesc from "./ProjectDesc";
import FsLightbox from "fslightbox-react";
import { SlideNumberContext } from "./SlideNumberContextProvider";
import { ViewerStatusContext } from "./ViewerStatusProvider";

const StyledProjectPage = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 85vw;
    text-align: center;
    flex: 1 1 auto;
    overflow: auto;
`;

const ProjectPage = props => {
    const imgUrls = images.map(image => image.src);

    const viewerIsOpen = useContext(ViewerStatusContext)[0];
    const slide = useContext(SlideNumberContext)[0];

    return (
        <StyledProjectPage>
            <DoubleImageWrapper images={[images[0], images[1]]} />

            <ProjectDesc>
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
            </ProjectDesc>
            <DoubleImageWrapper images={[images[2], images[3]]} />
            <FsLightbox toggler={viewerIsOpen} sources={imgUrls} slide={slide} />
        </StyledProjectPage>
    );
};

export default ProjectPage;
