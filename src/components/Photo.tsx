import React, { useContext } from "react";
import styled from "styled-components";
import { SlideNumberContext } from "./SlideNumberContextProvider";
import { ViewerStatusContext } from "./ViewerStatusProvider";

const StyledImage = styled.img`
    width: 33.5vw;
    height: 42.5vh;
    padding: 0.5rem;
`;

interface Props {
    img: { src: string; id: number };
}

const Photo = (props: Props) => {
    const [slide, setSlide] = useContext(SlideNumberContext);

    const [viewerIsOpen, setViewerIsOpen] = useContext(ViewerStatusContext);

    return (
        <StyledImage
            src={props.img.src}
            onClick={() => {
                setSlide(props.img.id + 1);
                setViewerIsOpen(!viewerIsOpen);
                console.log(slide);
            }}
        ></StyledImage>
    );
};

export default Photo;
