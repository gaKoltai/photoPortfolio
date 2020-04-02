import React from "react";
import styled from "styled-components";

const StyledCardTitleWrapper = styled.div`
    padding: 1rem;
    color: #393a42;
`;

interface Props {
    title: string;
}

const CardTitle = (props: Props) => {
    return (
        <StyledCardTitleWrapper>
            <h4>{props.title}</h4>
        </StyledCardTitleWrapper>
    );
};

export default CardTitle;
