import React, { useState } from "react";
import styled from "styled-components";
import { images } from "../util/photo";

export const Hero = styled.div`
    height: 100vh;
    width: 85vw;
    background-image: url(${props => props.photo});
    background-size: 85vw 100vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0 10vw;
`;

const LandingPage = () => {
    const photoGallery = images;

    const randomPhoto = photoGallery[Math.floor(Math.random() * photoGallery.length)].src;

    const photo = useState(randomPhoto)[0];

    return <Hero photo={photo}></Hero>;
};

export default LandingPage;
