import React from "react";
import styled from "styled-components";

interface StyleProps {
    first?: boolean;
}

const StyledFooterItem = styled.li`
    padding: 0.5rem 1rem 0.5rem 1rem;
    border-left: ${(props: StyleProps) => (props.first ? "" : "0.001rem solid #393a42")};
    text-decoration: none;
    list-style: none;
    float: left;
`;

interface Props {
    children: string;
    first?: boolean;
}

const FooterItem = (props: Props) => {
    return <StyledFooterItem first={props.first}>{props.children}</StyledFooterItem>;
};

export default FooterItem;
