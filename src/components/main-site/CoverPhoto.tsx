import React from "react";
import styled from "styled-components";

const StyledCoverPhoto = styled.img`
    width: 100%;
    height: 100vh;
`;

interface Props {
    photo: { id: number; src: string };
    id: string;
}

const CoverPhoto = (props: Props) => {
    return <StyledCoverPhoto id={props.id} src={props.photo.src} />;
};

export default CoverPhoto;
