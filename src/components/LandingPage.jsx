import React, { useState } from "react";
import styled from "styled-components";
import { photos } from "../util/photo";

export const Hero = styled.div`
    height: 100vh;
    width: 85vw;
    background-image: url(${props => props.photo});
    background-size: cover;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0 10vw;
`;

const LandingPage = () => {
    const photoGallery = photos;

    const randomPhoto = Math.floor(Math.random() * photoGallery.length);

    const [photo, setPhoto] = useState(photoGallery[randomPhoto].src);

    return <Hero photo={photo}></Hero>;
};

export default LandingPage;
