import React, { useContext } from "react";
import styled from "styled-components";
import DoubleImageWrapper from "./DoubleImageWrapper";
import imageLoader from "../../static/photo";
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
    overflow: auto;
    background-color: #d5d4d8;
`;

const ProjectPage = props => {
    const images = imageLoader();

    const imgUrls = images.map(image => image.src);

    const viewerIsOpen = useContext(ViewerStatusContext)[0];
    const slide = useContext(SlideNumberContext)[0];

    return (
        <StyledProjectPage>
            <Photo img={images[0]} large />

            <ProjectDesc>
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
            </ProjectDesc>
            <DoubleImageWrapper images={[images[1], images[2]]} />
            <DoubleImageWrapper images={[images[3], images[4]]} />
            <DoubleImageWrapper images={[images[5], images[6]]} />
            <DoubleImageWrapper images={[images[7], images[8]]} />
            <DoubleImageWrapper images={[images[9], images[10]]} />
            <DoubleImageWrapper images={[images[11], images[12]]} />
            <DoubleImageWrapper images={[images[13], images[14]]} />
            <DoubleImageWrapper images={[images[15], images[16]]} />
            <FsLightbox toggler={viewerIsOpen} sources={imgUrls} slide={slide} />
        </StyledProjectPage>
    );
};

export default ProjectPage;
