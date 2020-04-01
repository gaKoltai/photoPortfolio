import React, { useState, useRef, useContext } from "react";
import styled from "styled-components";
import imageLoader from "../../static/photo";
import Hero from "./Hero";
import Photo from "../portfolio/Photo";
import CoverPhoto from "./CoverPhoto";
import SectionTitle from "./SectionTitle";
import { ScrollRefContext } from "../context-providers/ScrollRefContextProvider";
import { Link } from "react-scroll";

interface HeroProps {
    photo?: string;
}

export const StyledLandingPage = styled.section`
    display: block;
    width: 80vw;
    text-align: center;
    margin-left: 20vw;
`;

const LandingPage = () => {
    const photoGallery = imageLoader();

    const randomPhoto: { id: number; src: string } = photoGallery[Math.floor(Math.random() * photoGallery.length)];

    return (
        <StyledLandingPage>
            <CoverPhoto id={"home"} photo={randomPhoto} />
            <Hero id={"portfolio"}>
                <SectionTitle>Portfolio</SectionTitle>
            </Hero>
        </StyledLandingPage>
    );
};

export default LandingPage;
