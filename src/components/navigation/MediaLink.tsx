import React, { ReactNode, Fragment } from "react";
import styled from "styled-components";
import CustomLink from "./CustomLink";

const StyledMediaLink = styled(Fragment)`
    margin: 2rem !important;

    &:hover {
        cursor: pointer;
    }
`;

interface Props {
    children?: ReactNode;
    link: string;
}

const MediaLink = (props: Props) => {
    return (
        <CustomLink to={props.link}>
            <StyledMediaLink>{props.children}</StyledMediaLink>
        </CustomLink>
    );
};

export default MediaLink;
