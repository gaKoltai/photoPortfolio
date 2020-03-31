import React, { useContext } from "react";
import styled from "styled-components";
import { SlideNumberContext } from "../context-providers/SlideNumberContextProvider";
import { ViewerStatusContext } from "../context-providers/ViewerStatusProvider";

interface ImageProps {
    large?: boolean;
}

const StyledImage = styled.img`
    width: ${(props: ImageProps) => (props.large ? "75rem" : "35rem")};
    height: ${(props: ImageProps) => (props.large ? "50rem" : "25.5rem")};
    flex-grow: ${(props: ImageProps) => (props.large ? "1" : "0")};
    padding: 0.5rem;

    &:hover {
        cursor: pointer;
    }
`;

interface Props {
    large?: boolean;
    img: { src: string; id: number };
}

const Photo = (props: Props) => {
    const [slide, setSlide] = useContext(SlideNumberContext);

    const [viewerIsOpen, setViewerIsOpen] = useContext(ViewerStatusContext);

    return (
        <StyledImage
            large={props.large}
            src={props.img.src}
            onClick={() => {
                setSlide(props.img.id);
                setViewerIsOpen(!viewerIsOpen);
            }}
        ></StyledImage>
    );
};

export default Photo;
