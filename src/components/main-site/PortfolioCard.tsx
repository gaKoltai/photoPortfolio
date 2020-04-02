import React, { ReactNode } from "react";
import styled from "styled-components";
import CardTitle from "./CardTitle";
import CustomLink from "../navigation/CustomLink";

const StyledCardContainer = styled.div`
    width: 30rem;
    margin: 1rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

interface Props {
    title: string;
    children: ReactNode;
    link: string;
}

const PortfolioCard = (props: Props) => {
    return (
        <CustomLink to={props.link}>
            <StyledCardContainer>
                {props.children}
                <CardTitle title={props.title}></CardTitle>
            </StyledCardContainer>
        </CustomLink>
    );
};

export default PortfolioCard;
