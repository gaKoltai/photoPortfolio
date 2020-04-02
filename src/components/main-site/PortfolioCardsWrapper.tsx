import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledPortfolioCardsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

interface Props {
    children: ReactNode;
}

const PortfolioCardsWrapper = (props: Props) => {
    return <StyledPortfolioCardsWrapper>{props.children}</StyledPortfolioCardsWrapper>;
};

export default PortfolioCardsWrapper;
