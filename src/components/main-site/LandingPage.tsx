import React, { useState } from "react";
import styled from "styled-components";
import imageLoader from "../../static/photo";
import Hero from "./Hero";

interface HeroProps {
    photo?: string;
}

export const StyledLandingPage = styled.section`
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
    const photoGallery = imageLoader();

    const randomPhoto = photoGallery[Math.floor(Math.random() * photoGallery.length)].src;

    const photo = useState(randomPhoto)[0];

    return (
        <StyledLandingPage>
            <Hero photo={photo}></Hero>
        </StyledLandingPage>
    );
};

export default LandingPage;
