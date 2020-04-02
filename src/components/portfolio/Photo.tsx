import React, { useContext } from "react";
import styled from "styled-components";
import { SlideNumberContext } from "../context-providers/SlideNumberContextProvider";
import { ViewerStatusContext } from "../context-providers/ViewerStatusProvider";

interface ImageProps {
    large?: boolean;
}

const StyledImage = styled.img`
    width: ${(props: ImageProps) => (props.large ? "81rem" : "40rem")};
    height: auto;
    flex-grow: ${(props: ImageProps) => (props.large ? "1" : "0")};
    margin: 1.5rem 0.5rem 1.5rem 0.5rem;

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
        />
    );
};

export default Photo;
