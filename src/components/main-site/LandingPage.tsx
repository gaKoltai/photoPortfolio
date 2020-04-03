import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import Hero from "./Hero";
import CoverPhoto from "./CoverPhoto";
import SectionTitle from "./SectionTitle";
import { scroller } from "react-scroll";
import ImageCard from "./PortfolioCard";
import CardImage from "./CardImage";
import { NavigationContext } from "../context-providers/NavigationContextProvider";
import { imageLoader } from "../../static/util/util";
import PortfolioCardsWrapper from "./PortfolioCardsWrapper";

interface HeroProps {
    photo?: string;
}

export const StyledLandingPage = styled.section`
    display: block;
    width: 85%;
    text-align: center;
    margin-left: 15%;
`;

const LandingPage = () => {
    const photoGallery = imageLoader("cover");

    const randomPhoto: { id: number; src: string } =
        photoGallery.img[Math.floor(Math.random() * photoGallery.img.length)];

    const [link, setLink] = useContext(NavigationContext);

    useEffect(() => {
        scroller.scrollTo(link, {
            duration: 400,
            delay: 0,
            smooth: "easeInOutQuart"
        });
    }, []);

    return (
        <StyledLandingPage>
            <CoverPhoto id={"home"} photo={randomPhoto} />
            <Hero id={"portfolio"}>
                <SectionTitle>Portfolio</SectionTitle>
                <PortfolioCardsWrapper>
                    <ImageCard title={"Baltazár Színház"} link={"/portfolio/baltazár"}>
                        <CardImage src={photoGallery.img[0].src} />
                    </ImageCard>
                    <ImageCard title={"Entrée"} link={"/portfolio/entrée"}>
                        <CardImage src={photoGallery.img[1].src} />
                    </ImageCard>
                </PortfolioCardsWrapper>
            </Hero>
        </StyledLandingPage>
    );
};

export default LandingPage;
