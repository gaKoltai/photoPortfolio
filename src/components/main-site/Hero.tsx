import React, { ReactNode } from "react";
import styled from "styled-components";

interface StyleProps {
    large?: boolean;
    dark?: boolean;
}

const StyledHero = styled.div`
    height: ${(props: StyleProps) => (props.large ? "100vh" : "auto")};
    width: 100%;
    background-color: ${(props: StyleProps) => (props.dark ? "#d5d4d8" : "#D8D7DB")};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

interface Props {
    children?: ReactNode;
    id?: string;
    large?: boolean;
    dark?: boolean;
}

const Hero = (props: Props) => {
    return (
        <StyledHero large={props.large} dark={props.dark} id={props.id}>
            {props.children}
        </StyledHero>
    );
};

export default Hero;
