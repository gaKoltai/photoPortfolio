import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import ImagesContainer from "./ImagesContainer";
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
    width: 85%;
    text-align: center;
    margin-left: 15%;
    flex: 1 1 auto;
    overflow: auto;
    background-color: #d5d4d8;
`;

interface Props {
    images: { id: number; src: string }[];
    description: string;
}

const ProjectPage = (props: Props) => {
    const imgUrls = props.images.map(image => image.src);

    const [viewerIsOpen, setViewerIsOpen] = useContext(ViewerStatusContext);
    const [slide, setSlide] = useContext(SlideNumberContext);

    useEffect(() => {
        scrollToTop();
    }, []);

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <StyledProjectPage>
            <Photo img={props.images[0]} large />
            <ProjectDesc>{props.description}</ProjectDesc>
            <ImagesContainer images={props.images} />
            <FsLightbox toggler={viewerIsOpen} sources={imgUrls} slide={slide} />
        </StyledProjectPage>
    );
};

export default ProjectPage;
