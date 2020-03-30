import React from "react";
import styled from "styled-components";

const StyledProjectDescription = styled.p`
    color: black;
    font-size: 2rem;
    margin-top: 5rem;
    margin-bottom: 5rem;
`;

interface Props {
    children: string;
}

const ProjectDesc = (props: Props) => {
    return <StyledProjectDescription>{props.children}</StyledProjectDescription>;
};

export default ProjectDesc;
