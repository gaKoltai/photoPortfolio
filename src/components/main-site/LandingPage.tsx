import React, { useState, useRef, useContext } from "react";
import styled from "styled-components";
import imageLoader from "../../static/photo";
import Hero from "./Hero";
import Photo from "../portfolio/Photo";
import CoverPhoto from "./CoverPhoto";
import SectionTitle from "./SectionTitle";
import { ScrollRefContext } from "../context-providers/ScrollRefContextProvider";
import { Link } from "react-scroll";
import ImageCard from "./PortfolioCard";
import CardImage from "./CardImage";

interface HeroProps {
    photo?: string;
}

export const StyledLandingPage = styled.section`
    display: block;
    width: 80%;
    text-align: center;
    margin-left: 20%;
`;

const LandingPage = () => {
    const photoGallery = imageLoader();

    const randomPhoto: { id: number; src: string } = photoGallery[Math.floor(Math.random() * photoGallery.length)];

    return (
        <StyledLandingPage>
            <CoverPhoto id={"home"} photo={randomPhoto} />
            <Hero id={"portfolio"}>
                <SectionTitle>Portfolio</SectionTitle>
                <ImageCard title={"Baltazár Színtársulat"} link={"/portfolio/baltazár"}>
                    <CardImage src={photoGallery[0].src} />
                </ImageCard>
            </Hero>
        </StyledLandingPage>
    );
};

export default LandingPage;
