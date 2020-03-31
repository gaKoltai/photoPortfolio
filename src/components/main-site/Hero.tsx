import React, { ReactNode } from "react";
import styled from "styled-components";

interface HeroProps {
    photo?: string;
}

const StyledHero = styled.section`
    height: 95vh;
    width: 80vw;
    background-image: url(${(props: HeroProps) => props.photo});
    background-size: 80vw 95vh;
    background-color: #d5d4d8;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0 10vw;
`;

interface Props {
    children?: ReactNode;
    photo?: string;
}

const Hero = (props: Props) => {
    return <StyledHero photo={props.photo}>{props.children}</StyledHero>;
};

export default Hero;
