import React from "react";
import styled from "styled-components";
import FooterItem from "./FooterItem";

const StyledFooter = styled.div`
    background-color: #c2c1c5;
    width: 85%;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    color: #393a42;
    margin-left: 15%;
    &.ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
    }
`;

interface Props {}

const Footer = (props: Props) => {
    return (
        <StyledFooter>
            <ul>
                <FooterItem first>© Untitled. All rights reserved</FooterItem>
                <FooterItem>Random text</FooterItem>
                <FooterItem>Random text</FooterItem>
            </ul>
        </StyledFooter>
    );
};

export default Footer;
