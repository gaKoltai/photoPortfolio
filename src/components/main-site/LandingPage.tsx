import React, { useState } from "react";
import styled from "styled-components";
import { images } from "../../static/photo";
import Hero from "./Hero";

interface HeroProps {
    photo?: string;
}

export const StyledLandingPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 85vw;
    text-align: center;
    flex: 1 1 auto;
    overflow: auto;
`;

const LandingPage = () => {
    const photoGallery = images;

    const randomPhoto = photoGallery[Math.floor(Math.random() * photoGallery.length)].src;

    const photo = useState(randomPhoto)[0];

    return (
        <StyledLandingPage>
            <Hero photo={photo}></Hero>
        </StyledLandingPage>
    );
};

export default LandingPage;
