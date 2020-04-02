import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import imageLoader from "../../static/util/baltazarImgLoader";
import Hero from "./Hero";
import Photo from "../portfolio/Photo";
import CoverPhoto from "./CoverPhoto";
import SectionTitle from "./SectionTitle";
import { scroller as scroll, scroller } from "react-scroll";
import ImageCard from "./PortfolioCard";
import CardImage from "./CardImage";
import { NavigationContext } from "../context-providers/NavigationContextProvider";

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
    const photoGallery = imageLoader();

    const randomPhoto: { id: number; src: string } = photoGallery[Math.floor(Math.random() * photoGallery.length)];

    const [link, setLink] = useContext(NavigationContext);

    useEffect(() => {
        scroller.scrollTo(link, {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart"
        });
    }, []);

    return (
        <StyledLandingPage>
            <CoverPhoto id={"home"} photo={randomPhoto} />
            <Hero id={"portfolio"}>
                <SectionTitle>Portfolio</SectionTitle>
                <ImageCard title={"Baltazár Színház"} link={"/portfolio/baltazár"}>
                    <CardImage src={photoGallery[0].src} />
                </ImageCard>
            </Hero>
        </StyledLandingPage>
    );
};

export default LandingPage;
