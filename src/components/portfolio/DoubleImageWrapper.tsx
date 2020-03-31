import React from "react";
import styled from "styled-components";
import Photo from "./Photo";

const StyledDoubleImageWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

interface Props {
    images: [{ src: string; id: number }];
}

const DoubleImageWrapper = (props: Props) => {
    return (
        <StyledDoubleImageWrapper>
            {props.images.map(img => (
                <Photo key={img.id} img={img} />
            ))}
        </StyledDoubleImageWrapper>
    );
};

export default DoubleImageWrapper;
