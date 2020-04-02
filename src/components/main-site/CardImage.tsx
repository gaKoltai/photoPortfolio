import React from "react";
import styled from "styled-components";

const StyledCardImage = styled.img`
    width: 100%;
`;

interface Props {
    src: string;
}

const CardImage = (props: Props) => {
    return <StyledCardImage src={props.src} />;
};

export default CardImage;
