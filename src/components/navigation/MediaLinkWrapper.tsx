import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledMediaLinkWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin: 2rem;
`;

interface Props {
    children?: ReactNode;
}

const MediaLinkWrapper = (props: Props) => {
    return <StyledMediaLinkWrapper>{props.children}</StyledMediaLinkWrapper>;
};

export default MediaLinkWrapper;
