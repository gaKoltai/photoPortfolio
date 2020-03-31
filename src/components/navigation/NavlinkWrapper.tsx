import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledNavWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
`;

interface Props {
    children?: ReactNode;
}

const NavlinkWrapper = (props: Props) => {
    return <StyledNavWrapper>{props.children}</StyledNavWrapper>;
};

export default NavlinkWrapper;
