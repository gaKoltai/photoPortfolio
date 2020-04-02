import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledHero = styled.div`
    height: 85vh;
    width: 100%;
    background-color: #d5d4d8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

interface Props {
    children?: ReactNode;
    id?: string;
}

const Hero = (props: Props) => {
    return <StyledHero id={props.id}>{props.children}</StyledHero>;
};

export default Hero;
