import React from "react";
import styled from "styled-components";
import Photo from "./Photo";

const StyledImagesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    text-align: center;
    justify-content: center;
    width: 85%;
    margin-bottom: 2rem;
`;

interface Props {
    images: { src: string; id: number }[];
}

const ImagesContainer = (props: Props) => {
    return (
        <StyledImagesContainer>
            {props.images.map(img => {
                return img !== props.images[0] && <Photo key={img.id} img={img} />;
            })}
        </StyledImagesContainer>
    );
};

export default ImagesContainer;
