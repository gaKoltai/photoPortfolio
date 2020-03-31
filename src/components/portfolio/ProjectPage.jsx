import React, { useContext } from "react";
import styled from "styled-components";
import DoubleImageWrapper from "./DoubleImageWrapper";
import { images } from "../../static/photo";
import ProjectDesc from "./ProjectDesc";
import FsLightbox from "fslightbox-react";
import { SlideNumberContext } from "../context-providers/SlideNumberContextProvider";
import { ViewerStatusContext } from "../context-providers/ViewerStatusProvider";
import Photo from "./Photo";

const StyledProjectPage = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 85vw;
    text-align: center;
    flex: 1 1 auto;
    overflow-x: hidden;
    overflow: auto;
`;

const ProjectPage = props => {
    const imgUrls = images.map(image => image.src);

    const viewerIsOpen = useContext(ViewerStatusContext)[0];
    const slide = useContext(SlideNumberContext)[0];

    return (
        <StyledProjectPage>
            <Photo img={images[0]} large />

            <ProjectDesc>
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
            </ProjectDesc>
            <DoubleImageWrapper images={[images[2], images[3]]} />
            <DoubleImageWrapper images={[images[2], images[3]]} />
            <DoubleImageWrapper images={[images[2], images[3]]} />
            <DoubleImageWrapper images={[images[2], images[3]]} />
            <FsLightbox toggler={viewerIsOpen} sources={imgUrls} slide={slide} />
        </StyledProjectPage>
    );
};

export default ProjectPage;
